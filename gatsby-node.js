const path = require("path");
const fs = require("fs");
const kebabCase = require("lodash/kebabCase");

const POSTS_PER_PAGE = 8;
const PUBLIC_PATH = path.resolve("./public");

const getUriFromFullPath = (fullPath, domain) => {
    if (!fullPath) {
        return "";
    }

    return fullPath.replace(`https://hopfab.com/${domain}/`, "");
};

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
    // Query our posts from the GraphQL server
    const posts = await getPosts(gatsbyUtilities);

    await createIndividualBlogPostPages({ posts, gatsbyUtilities });

    await createBlogPostListPages({ posts, gatsbyUtilities });

    await createBlogPostListJsonFiles({ posts });

    const groupCategories = await getGroupCategories(gatsbyUtilities);

    const categories = await getCategories(gatsbyUtilities);

    await createBlogPostCategoryListPages({
        groupCategories,
        categories,
        gatsbyUtilities,
    });

    await createBlogPostCategoryListJsonFiles({
        groupCategories,
        categories,
        posts,
    });

    const projects = await getProjects(gatsbyUtilities);


    await createIndividualProjectPages({ projects, gatsbyUtilities });

    await createProjectListPages({ projects, gatsbyUtilities });

    await createProjectListJsonFiles({ projects });

    const groupTypesDeProjet = await getGroupTypesDeProjet(gatsbyUtilities);

    await createProjectTypeDeProjetListPages({
        groupTypesDeProjet,
        gatsbyUtilities,
    });

    await createProjectTypeDeProjetListJsonFiles({
        groupTypesDeProjet,
        projects,
    });

    const materials = await getMaterials(gatsbyUtilities);

    await createIndividualMaterialPages({ materials, gatsbyUtilities });

    await createMaterialListPages({ materials, gatsbyUtilities });

    await createMaterialListJsonFiles({ materials });

    const groupTypesDeMateriau = await getGroupMateriauType(gatsbyUtilities);

    await createMaterialTypeDeMateriauListPages({
        groupTypesDeMateriau,
        gatsbyUtilities,
    });

    await createMaterialTypeDeMateriauListJsonFiles({
        groupTypesDeMateriau,
        materials,
    });

    const referentiels = await getReferentiels(gatsbyUtilities);
    await createReferentielJsonFile({ referentiels });
};

/**
 * Cette fonction crée tous les articles de blog.
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) => {
    Promise.all(
        posts.map(({ post }) =>
            // createPage is an action passed to createPages
            // See https://www.gatsbyjs.com/docs/actions#createPage for more info
            gatsbyUtilities.actions.createPage({
                // Use the WordPress uri as the Gatsby page path
                // This is a good idea so that internal links and menus work 👍
                path: `/blog${post.uri}`,

                // use the blog post template as the page component
                component: path.resolve(`./src/templates/blog-post.tsx`),

                // `context` is available in the template as a prop and
                // as a variable in GraphQL.
                context: {
                    // we need to add the post id here
                    // so our blog post template knows which blog post
                    // the current page is (when you open it in a browser)
                    id: post.id,
                },
            })
        )
    );
};

/**
 * Cette fonction crée toutes les pages de listing de billets de blog.
 * Ex: (blog, blog/{numéro de page}...)
 */
const createBlogPostListPages = async ({ posts, gatsbyUtilities }) => {
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    Array.from({ length: totalPages }).forEach((_, i) => {
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        gatsbyUtilities.actions.createPage({
            path: `/blog${i !== 0 ? `/${i + 1}` : ""}`,
            component: path.resolve("./src/templates/blog-post-list.tsx"),
            context: {
                limit: POSTS_PER_PAGE,
                skip: i * POSTS_PER_PAGE,
                totalPages,
                currentPage: i + 1,
            },
        });
    });
};

/**
 * Cette fonction crée tous les payload JSON de listing de billets de blog.
 * Ex: (blog, blog/{numéro de page} ...)
 */
const createBlogPostListJsonFiles = async ({ posts }) => {
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    Array.from({ length: totalPages }).forEach((_, i) => {
        const filteredPosts = posts.slice(
            i * POSTS_PER_PAGE,
            (i + 1) * POSTS_PER_PAGE
        );

        const fileJson = JSON.stringify(filteredPosts);

        const filePath = path.join(
            PUBLIC_PATH,
            `blog${i !== 0 ? `-${i}` : ""}.json`
        );

        console.log(filePath);

        fs.writeFile(filePath, fileJson, err => {
            if (err) {
                console.log(err);
                throw new Error(err.message);
            }
        });
    });
};

/**
 * Cette fonction crée toutes les pages de listing de billets de blog pour chaque catégorie.
 * Ex: blog/categorie/{nom de catégorie}, blog/categorie/{nom de catégorie}/{numéro de page} ...
 */
const createBlogPostCategoryListPages = async ({
    groupCategories,
    categories,
    gatsbyUtilities,
}) => {
    Promise.all(
        groupCategories.map(groupCategory => {
            const totalPages = Math.ceil(groupCategory.totalCount / POSTS_PER_PAGE);

            const categoryId = groupCategory.fieldValue;
            const category = categories.find(c => c.id === categoryId);

            Array.from({ length: totalPages }).forEach((_, i) => {
                // createPage is an action passed to createPages
                // See https://www.gatsbyjs.com/docs/actions#createPage for more info
                gatsbyUtilities.actions.createPage({
                    path: `/blog${category.uri}${i !== 0 ? `${i + 1}` : ""}`,
                    component: path.resolve("./src/templates/blog-post-list.tsx"),
                    context: {
                        filters: {
                            categories: {
                                nodes: { elemMatch: { id: { in: [category.id] } } },
                            },
                        },
                        category: category,
                        limit: POSTS_PER_PAGE,
                        skip: i * POSTS_PER_PAGE,
                        totalPages,
                        currentPage: i + 1,
                    },
                });
            });
        })
    );
};

/**
 * Cette fonction crée tous les payload JSON de listing de billets de blog pour chaque catégorie.
 * Ex: blog/categorie/{nom de catégorie}, blog/categorie/{nom de catégorie}/{numéro de page} ...
 */
const createBlogPostCategoryListJsonFiles = async ({
    groupCategories,
    categories,
    posts,
}) => {
    groupCategories.forEach(groupCategory => {
        const totalPages = Math.ceil(groupCategory.totalCount / POSTS_PER_PAGE);

        const categoryId = groupCategory.fieldValue;
        const category = categories.find(c => c.id === categoryId);

        Array.from({ length: totalPages }).forEach((_, i) => {
            const filteredPosts = posts
                .filter(p => p.post.categories.nodes.find(c => c.id === categoryId))
                .slice(i * POSTS_PER_PAGE, (i + 1) * POSTS_PER_PAGE);

            const fileJson = JSON.stringify(filteredPosts);

            const filePath = path.join(
                PUBLIC_PATH,
                `blog-${category.slug}${i !== 0 ? `-${i}` : ""}.json`
            );

            console.log(filePath);

            fs.writeFile(filePath, fileJson, err => {
                if (err) {
                    console.log(err);
                    throw new Error(err.message);
                }
            });
        });
    });
};

/**
 * Cette fonction crée toutes les fiches de réalisation.
 */
const createIndividualProjectPages = async ({ projects, gatsbyUtilities }) => {
    Promise.all(
        projects.map(({ project }) => {
            // createPage is an action passed to createPages
            // See https://www.gatsbyjs.com/docs/actions#createPage for more info
            gatsbyUtilities.actions.createPage({
                // Use the Google Sheets 'Lien site Hopfab' uri as the Gatsby page path
                // This is a good idea so that internal links and menus work 👍
                path: `/realisations/${getUriFromFullPath(
                    project.fullPath,
                    "realisations"
                )}`,

                // use the project template as the page component
                component: path.resolve(`./src/templates/project-page.tsx`),

                // `context` is available in the template as a prop and
                // as a variable in GraphQL.
                context: {
                    id: project.id,
                },
            });
        })
    );
};

/**
 * Cette fonction crée toutes les pages de listing de réalisations.
 * Ex: (realisations, realisations/{numéro de page} ...)
 */
const createProjectListPages = async ({ projects, gatsbyUtilities }) => {
    const totalPages = Math.ceil(projects.length / POSTS_PER_PAGE);

    Array.from({ length: totalPages }).forEach((_, i) => {
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        gatsbyUtilities.actions.createPage({
            path: `/realisations${i !== 0 ? `/${i + 1}` : ""}`,
            component: path.resolve("./src/templates/project-list.tsx"),
            context: {
                filters: {
                    lienSiteHopfab: { nin: [null] },
                },
                limit: POSTS_PER_PAGE,
                skip: i * POSTS_PER_PAGE,
                totalPages,
                currentPage: i + 1,
            },
        });
    });
};

/**
 * Cette fonction crée tous les payload JSON de listing de réalisations.
 * Ex: (realisations, realisations/{numéro de page} ...)
 */
const createProjectListJsonFiles = async ({ projects }) => {
    const totalPages = Math.ceil(projects.length / POSTS_PER_PAGE);

    Array.from({ length: totalPages }).forEach((_, i) => {
        const filteredProjects = projects.slice(
            i * POSTS_PER_PAGE,
            (i + 1) * POSTS_PER_PAGE
        );

        const fileJson = JSON.stringify(filteredProjects);

        const filePath = path.join(
            PUBLIC_PATH,
            `realisations${i !== 0 ? `-${i}` : ""}.json`
        );

        console.log(filePath);

        fs.writeFile(filePath, fileJson, err => {
            if (err) {
                console.log(err);
                throw new Error(err.message);
            }
        });
    });
};

/**
 * Cette fonction crée toutes les pages de listing de réalisations pour chaque type de projet.
 * Ex: realisations/type-de-projet/{nom du type de projet}, realisations/type-de-projet/{nom du type de projet}/{numéro de page} ...
 */
const createProjectTypeDeProjetListPages = async ({
    groupTypesDeProjet,
    gatsbyUtilities,
}) => {
    Promise.all(
        groupTypesDeProjet.map(groupTypeDeProjet => {
            const totalPages = Math.ceil(
                groupTypeDeProjet.totalCount / POSTS_PER_PAGE
            );

            const typeDeProjet = groupTypeDeProjet.fieldValue;
            const typeDeProjetSlug = kebabCase(typeDeProjet);

            Array.from({ length: totalPages }).forEach((_, i) => {
                // createPage is an action passed to createPages
                // See https://www.gatsbyjs.com/docs/actions#createPage for more info
                gatsbyUtilities.actions.createPage({
                    path: `/realisations/type-de-projet/${typeDeProjetSlug}${i !== 0 ? `/${i + 1}` : ""
                        }`,
                    component: path.resolve("./src/templates/project-list.tsx"),
                    context: {
                        filters: {
                            typeDeProjet: { eq: typeDeProjet },
                            lienSiteHopfab: { nin: [null] },
                        },
                        limit: POSTS_PER_PAGE,
                        skip: i * POSTS_PER_PAGE,
                        totalPages,
                        currentPage: i + 1,
                    },
                });
            });
        })
    );
};

/**
 * Cette fonction crée tous les payload JSON de listing de réalisations pour chaque type de projet.
 * Ex: realisations/type-de-projet/{nom du type de projet}, realisations/type-de-projet/{nom du type de projet}/{numéro de page} ...
 */
const createProjectTypeDeProjetListJsonFiles = async ({
    groupTypesDeProjet,
    projects,
}) => {
    Promise.all(
        groupTypesDeProjet.map(groupTypeDeProjet => {
            const totalPages = Math.ceil(
                groupTypeDeProjet.totalCount / POSTS_PER_PAGE
            );

            const typeDeProjet = groupTypeDeProjet.fieldValue;
            const typeDeProjetSlug = kebabCase(typeDeProjet);

            Array.from({ length: totalPages }).forEach((_, i) => {
                const filteredProjects = projects
                    .filter(m => m.project.typeDeProjet === typeDeProjet)
                    .slice(i * POSTS_PER_PAGE, (i + 1) * POSTS_PER_PAGE);

                const fileJson = JSON.stringify(filteredProjects);

                const filePath = path.join(
                    PUBLIC_PATH,
                    `realisations-${typeDeProjetSlug}${i !== 0 ? `-${i}` : ""}.json`
                );

                console.log(filePath);

                fs.writeFile(filePath, fileJson, err => {
                    if (err) {
                        console.log(err);
                        throw new Error(err.message);
                    }
                });
            });
        })
    );
};

/**
 * Cette fonction crée toutes les fiches de matériau.
 */
const createIndividualMaterialPages = async ({
    materials,
    gatsbyUtilities,
}) => {
    Promise.all(
        materials.map(({ material }) => {
            // createPage is an action passed to createPages
            // See https://www.gatsbyjs.com/docs/actions#createPage for more info
            gatsbyUtilities.actions.createPage({
                // Use the Google Sheets 'Lien site Hopfab' uri as the Gatsby page path
                // This is a good idea so that internal links and menus work 👍
                path: `/materiautheque/${getUriFromFullPath(
                    material.fullPath,
                    "materiautheque"
                )}`,

                // use the material template as the page component
                component: path.resolve(`./src/templates/material-page.tsx`),

                // `context` is available in the template as a prop and
                // as a variable in GraphQL.
                context: {
                    id: material.id,
                },
            });
        })
    );
};

/**
 * Cette fonction crée toutes les pages de listing de matériaux.
 * Ex: (materiautheque, materiautheque/{numéro de page} ...)
 */
const createMaterialListPages = async ({ materials, gatsbyUtilities }) => {
    const totalPages = Math.ceil(materials.length / POSTS_PER_PAGE);

    Array.from({ length: totalPages }).forEach((_, i) => {
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        gatsbyUtilities.actions.createPage({
            path: `/materiautheque${i !== 0 ? `/${i + 1}` : ""}`,
            component: path.resolve("./src/templates/material-list.tsx"),
            context: {
                filters: {
                    lienSiteHopfab: { nin: [null] },
                    integrerSurSite: { in: ["oui"] },
                },
                limit: POSTS_PER_PAGE,
                skip: i * POSTS_PER_PAGE,
                totalPages,
                currentPage: i + 1,
            },
        });
    });
};

/**
 * Cette fonction crée tous les payload JSON de listing de matériaux.
 * Ex: (materiautheque, materiautheque/{numéro de page} ...)
 */
const createMaterialListJsonFiles = async ({ materials }) => {
    const totalPages = Math.ceil(materials.length / POSTS_PER_PAGE);

    Array.from({ length: totalPages }).forEach((_, i) => {
        const filteredMaterials = materials.slice(
            i * POSTS_PER_PAGE,
            (i + 1) * POSTS_PER_PAGE
        );

        const fileJson = JSON.stringify(filteredMaterials);

        const filePath = path.join(
            PUBLIC_PATH,
            `materiautheque${i !== 0 ? `-${i}` : ""}.json`
        );

        console.log(filePath);

        fs.writeFile(filePath, fileJson, err => {
            if (err) {
                console.log(err);
                throw new Error(err.message);
            }
        });
    });
};

/**
 * Cette fonction crée toutes les pages de listing de matériaux pour chaque type de matériau.
 * Ex: materiautheque/type-de-materiau/{nom du type de matériau}, realisations/type-de-materiau/{nom du type de matériau}/{numéro de page} ...
 */
const createMaterialTypeDeMateriauListPages = async ({
    groupTypesDeMateriau,
    gatsbyUtilities,
}) => {
    Promise.all(
        groupTypesDeMateriau.map(groupTypeDeMateriau => {
            const totalPages = Math.ceil(
                groupTypeDeMateriau.totalCount / POSTS_PER_PAGE
            );

            const typeDeMateriau = groupTypeDeMateriau.fieldValue;
            const typeDeMateriauSlug = kebabCase(typeDeMateriau);

            Array.from({ length: totalPages }).forEach((_, i) => {
                // createPage is an action passed to createPages
                // See https://www.gatsbyjs.com/docs/actions#createPage for more info
                gatsbyUtilities.actions.createPage({
                    path: `/materiautheque/type-de-materiau/${typeDeMateriauSlug}${i !== 0 ? `/${i + 1}` : ""
                        }`,
                    component: path.resolve("./src/templates/material-list.tsx"),
                    context: {
                        filters: {
                            materiau: { eq: typeDeMateriau },
                            lienSiteHopfab: { nin: [null] },
                            integrerSurSite: { in: ["oui"] },
                        },
                        limit: POSTS_PER_PAGE,
                        skip: i * POSTS_PER_PAGE,
                        totalPages,
                        currentPage: i + 1,
                    },
                });
            });
        })
    );
};

/**
 * Cette fonction crée tous les payload JSON de listing de matériaux pour chaque type de matériau.
 * Ex: materiautheque/type-de-materiau/{nom du type de matériau}, realisations/type-de-materiau/{nom du type de matériau}/{numéro de page} ...
 */
const createMaterialTypeDeMateriauListJsonFiles = async ({
    groupTypesDeMateriau,
    materials,
}) => {
    Promise.all(
        groupTypesDeMateriau.map(groupTypeDeMateriau => {
            const totalPages = Math.ceil(
                groupTypeDeMateriau.totalCount / POSTS_PER_PAGE
            );

            const typeDeMateriau = groupTypeDeMateriau.fieldValue;
            const typeDeMateriauSlug = kebabCase(typeDeMateriau);

            Array.from({ length: totalPages }).forEach((_, i) => {
                const filteredMaterials = materials
                    .filter(m => m.material.materiau === typeDeMateriau)
                    .slice(i * POSTS_PER_PAGE, (i + 1) * POSTS_PER_PAGE);

                const fileJson = JSON.stringify(filteredMaterials);

                const filePath = path.join(
                    PUBLIC_PATH,
                    `materiautheque-${typeDeMateriauSlug}${i !== 0 ? `-${i}` : ""}.json`
                );

                console.log(filePath);

                fs.writeFile(filePath, fileJson, err => {
                    if (err) {
                        console.log(err);
                        throw new Error(err.message);
                    }
                });
            });
        })
    );
};

/**
 * Cette fonction crée le payload JSON referentiels.json, contenant tous les référentiels nécessaires pour le dépôt de projet.
 */
const createReferentielJsonFile = async ({ referentiels }) => {
    const fileJson = JSON.stringify(referentiels);

    const filePath = path.join(PUBLIC_PATH, `referentiels.json`);

    console.log(filePath);

    fs.writeFile(filePath, fileJson, err => {
        if (err) {
            console.log(err);
            throw new Error(err.message);
        }
    });
};

const getPosts = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
            title
            excerpt
            date
            categories {
              nodes {
                id
                name
                slug
                uri
              }
            }

            portraitFeaturedImage: featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 640
                      height: 865
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
            landscapeFeaturedImage: featuredImage {
              node {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      width: 768
                      height: 635
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allWpPost.edges;
};

const getCategories = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(/* GraphQL */ `
    query WpCategories {
      allWpCategory {
        nodes {
          id
          name
          slug
          uri
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your categories`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allWpCategory.nodes;
};

const getGroupCategories = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(/* GraphQL */ `
    query WpCategories {
      allWpPost {
        group(field: categories___nodes___id) {
          fieldValue
          totalCount
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your categories`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allWpPost.group;
};

const getProjects = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(`
    query Projects {
      allGoogleProjetsSiteSheet(
        filter: { lienSiteHopfab: { nin: [null] } }
        sort: { fields: index, order: DESC }
      ) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "project" for this query
          # We're doing this because this "node" is a project! It makes our code more readable further down the line.
          project: node {
            id
            #idProjet
            fullPath: lienSiteHopfab
            typeDeProjet
            titre
            titreDescriptif
            architecte
            client
            prestationsPrincipales
            photo1Description
            photo1Image {
              childImageSharp {
                gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your projects`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allGoogleProjetsSiteSheet.edges;
};

const getGroupTypesDeProjet = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(/* GraphQL */ `
    query ProjectTypes {
      allGoogleProjetsSiteSheet(filter: { lienSiteHopfab: { nin: [null] } }) {
        group(field: typeDeProjet) {
          fieldValue
          totalCount
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your categories`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allGoogleProjetsSiteSheet.group;
};

const getMaterials = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(`
    query Materials {
      allGoogleMateriauthequeSiteSheet(
        filter: {
          lienSiteHopfab: { nin: [null] }
          integrerSurSite: { in: ["oui"] }
        }
        sort: { fields: index, order: DESC }
      ) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "material" for this query
          # We're doing this because this "node" is a material! It makes our code more readable further down the line.
          material: node {
            id
            fullPath: lienSiteHopfab
            integrerSurSite
            reference
            nomMateriau
            materiau
            domainesDapplication
            photo1Image {
              childImageSharp {
                gatsbyImageData(width: 640, height: 836, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your materials`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allGoogleMateriauthequeSiteSheet.edges;
};

const getGroupMateriauType = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(/* GraphQL */ `
    query MateriauTypes {
      allGoogleMateriauthequeSiteSheet(
        filter: {
          lienSiteHopfab: { nin: [null] }
          integrerSurSite: { in: ["oui"] }
        }
      ) {
        group(field: materiau) {
          fieldValue
          totalCount
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your materiau types`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data.allGoogleMateriauthequeSiteSheet.group;
};

const getReferentiels = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(`
    query referentiels {
        allMaterials(
            filter: {
              isPublished: { eq: true }
            }
            sort: { fields: orderNr }
          ) {
            nodes {
              id__normalized
              name
              humanName
            }
          }
      allServiceTypes(
        filter: {
          isPublished: { eq: true }
          name: { in:  ["mise-en-relation", "estimatif-de-chiffrage", "chiffrage-standard"] }
        }
        sort: { fields: orderNr }
      ) {
        nodes {
          id__normalized
          name
          humanName
        }
      }
      allTypologies(
        filter: { isPublished: { eq: true } }
        sort: { fields: orderNr }
      ) {
        nodes {
          id__normalized
          name
          humanName
        }
      }
      allBadges(
        filter: { isPublished: { eq: true } }
        sort: { fields: orderNr }
      ) {
        nodes {
          id__normalized
          name
          humanName
        }
      }
      allServices(
        filter: {
          isPublished: { eq: true }
          parentId: { eq: null }
          name: {
            in: [
              "agencement"
              "mobilier"
              "luminaire"
              "tapisserie"
              "decoration"
              "vegetalisation"
              "plan-de-travail-vasque"
              "restauration"
              "enseigne-et-signaletique"
            ]
          }
        }
        sort: { fields: orderNr }
      ) {
        nodes {
          id__normalized
          name
          humanName
        }
      }
      allPriceRanges(
        filter: { isPublished: { eq: true } }
        sort: { fields: orderNr }
      ) {
        nodes {
          id__normalized
          name
          humanName
        }
      }
      allProfessions(
        filter: { isPublished: { eq: true } }
        sort: { fields: orderNr }
      ) {
        nodes {
          id__normalized
          name
          humanName
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your referentiels`,
            graphqlResult.errors
        );
        return;
    }

    return graphqlResult.data;
};
