"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const default_layout_1 = require("../components/layouts/default-layout");
const seo_1 = require("../components/seo/seo");
const MentionsLegalesPage = () => {
    const [currentTab, setCurrentTab] = react_1.useState("tab-acheteur");
    return (<default_layout_1.default>
      <seo_1.default title="Mentions légales"/>
      <h1 className="text-7.5xl md:text-9xl lg:text-9.1xl xl:text-11xl font-bold max-w-5xl mt-20 mb-8">
        Mentions légales
      </h1>
      <div className="max-w-3xl m-auto">
        <p className="mb-2">
          <span className="font-bold">Éditeur du site</span> : Ce site est édité
          par la société HOPFAB, société par actions simplifiée au capital
          social de 11.337,30 €, immatriculée au Registre du Commerce et des
          Sociétés de Bobigny sous le numéro B 813 770 500 et dont le siège
          social est situé au 12, Rue Anselme, 93400, Saint-Ouen, France.
          <p>E-mail : contact@hopfab.com</p>
          <p>Téléphone : 07 86 05 30 29</p>
        </p>
        <p className="mb-2">
          <span className="font-bold">Directrice de publication du site</span> :
          Madame Géraldine Bal, Présidente de la société HOPFAB
        </p>
        <p className="mb-2">
          <span className="font-bold">Hébergeur</span> : NETLIFY INC, société de
          droit américain immatriculée au Registre du Commerce et des Sociétés
          du Delaware sous le numéro C3644845 et dont le siège social est situé
          au 2343, 3rd Street, Suite 296, 94107, San Francisco, Californie.
          E-mail : support@netlify.com / fraud@netlify.com / privacy@netlify.com
          Téléphone : +1 (415) 691-1573
        </p>
      </div>
      <div className="sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8">
          <button id="button-tab-acheteur" type="button" onClick={() => setCurrentTab("tab-acheteur")} className={`relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-brown-700 focus:z-10 sm:w-auto sm:px-8 ${currentTab === "tab-acheteur"
            ? "bg-brown-700 text-brown-50 border-gray-200"
            : "border border-transparent"}`} aria-controls="tab-acheteur" role="tab" aria-selected={currentTab === "tab-acheteur"}>
            Conditions d'utilisation acheteur
          </button>
          <button id="button-tab-intermediaire" type="button" onClick={() => setCurrentTab("tab-intermediaire")} className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-brown-700 focus:z-10 sm:w-auto sm:px-8 ${currentTab === "tab-intermediaire"
            ? "bg-brown-700 text-brown-50 border-gray-200"
            : "border border-transparent"}`} aria-controls="tab-intermediaire" role="tab" aria-selected={currentTab === "tab-intermediaire"}>
            Conditions d'utilisation intermédiaire
          </button>
        </div>
      </div>
      <section className="my-12">
        <div id="tab-acheteur" className={`max-w-3xl m-auto ${currentTab === "tab-acheteur" ? "" : "hidden"}`} aria-labelledby="button-tab-acheteur" role="tabpanel">
          <div className="text-center mb-4">Mises à jour le 10 avril 2020</div>

          <h2 className="text-2xl font-bold mb-3">
            Conditions Générales d’Utilisation entre Hopfab et Acheteurs
          </h2>

          <h3 className="text-xl font-bold mb-3">
            1 - Présentation et objet des présentes Conditions Générales
            d’Utilisation
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">1.1 - Présentation d’HOPFAB</span>.
                HOPFAB est une société par actions simplifiée au capital social
                de 11 337,30 €, immatriculée au Registre du Commerce et des
                Sociétés de Bobigny sous le numéro 813 770 500 et dont le siège
                social est situé au 12, Rue Anselme, 93400, Saint-Ouen ("
                <span className="font-bold">HOPFAB</span>").
              </li>
              <li>
                <span className="font-bold">
                  1.2 - Présentation de d’activité d’HOPFAB
                </span>
                . HOPFAB a pour activité le développement et l’exploitation
                d’une plateforme accessible à l’adresse
                <a className="mx-1 underline" href="https://hopfab.com">
                  https://hopfab.com
                </a>
                (le "<span className="font-bold">Site</span>") et, plus
                généralement, la fourniture de services de mise en relation et
                de facilitation des transactions (les "
                <span className="font-bold">Services</span>") entre des vendeurs
                (les "<span className="font-bold">Vendeurs</span>") et des
                acheteurs potentiels particuliers ou professionnels (les "
                <span className="font-bold">Acheteurs</span>") ou des
                intermédiaires tels que des architectes agissant pour ces
                clients potentiels (les "
                <span className="font-bold">Intermédiaires</span>"), sur des
                projets de mobilier, d’agencement, d’aménagement, de décoration,
                de luminaire, de signalétique, de végétalisation d’espaces ou de
                travaux (les "<span className="font-bold">Projets</span>"),
                qu’il s’agisse de projets issus d’un concept, d’un plan ou d’un
                croquis propre aux Acheteurs et/ou Intermédiaires (les "
                <span className="font-bold">Projets Sur-Mesure</span>"), de
                projets relatifs à un produit proposé par les Vendeurs (les "
                <span className="font-bold">Projets Sur-Catalogue</span>") ou de
                projets de travaux tout corps d’état (les "
                <span className="font-bold">
                  Projets de Travaux Tout Corps d’État
                </span>
                "). HOPFAB est un acteur reconnu dans son secteur d’activité et
                a développé un réseau important de Vendeurs et des relations
                privilégiées avec des Acheteurs et des Intermédiaires, grâce à
                ses compétences, son expérience, son savoir-faire et, plus
                particulièrement, par le biais de ses actions de promotion et de
                prospection.
              </li>
              <li>
                <span className="font-bold">
                  1.3 - Relation entre HOPFAB et les Acheteurs
                </span>
                . HOPFAB a la qualité de tiers de confiance facilitant la mise
                en relation et les transactions entre les Vendeurs et les
                Acheteurs et/ou Intermédiaires. HOPFAB n’est ni Vendeur, ni
                Acheteur, ni Intermédiaire. HOPFAB n’a pas le pouvoir de
                conclure des contrats avec des Vendeurs au nom et pour le compte
                des Acheteurs et/ou Intermédiaires et, plus généralement, d’agir
                au nom et/ou pour le compte des Acheteurs et/ou Intermédiaires.
                Les relations entre HOPFAB et les Acheteurs ne sauraient en
                aucun cas s’analyser comme créant une relation de salariat, un
                contrat de voyageur, représentant ou placier, un contrat d’agent
                commercial, un mandat d’intérêt commun ou un mandat, toute
                relation de cette nature étant expressément exclue.
              </li>
              <li>
                <span className="font-bold">
                  1.4 - Documents contractuels régissant les relations entre
                  HOPFAB et les Acheteurs
                </span>
                . Les relations entre HOPFAB et les Acheteurs sont régies par
                les présentes Conditions Générales d’Utilisation (les "
                <span className="font-bold">CGU</span>") et par tout autre
                document incorporé contractuellement au sein de celles-ci, à
                savoir, les documents d’information sur les Services d’HOPFAB,
                les conditions d’accès et d’utilisation des Services d’HOPFAB et
                la politique de protection des données d’HOPFAB (les "
                <span className="font-bold">Documents d’Information</span>")
                annexés aux présentes et/ou communiqués par HOPFAB (ensemble,
                les "<span className="font-bold">Documents Contractuels</span>
                ").
                <p>
                  Les présentes CGU ont pour objet de déterminer les conditions
                  dans lesquelles HOPFAB identifiera et présentera aux Acheteurs
                  des Vendeurs susceptibles de réaliser leurs Projets.
                </p>
                <p>
                  Les Documents d’Information ont pour objet d’établir et de
                  fournir les indications nécessaires et utiles sur les
                  conditions d’accès et d’utilisation des Services d’HOPFAB et
                  la politique de protection des données d’HOPFAB.
                </p>
                <p>
                  En cas de contradiction entre ces Documents Contractuels, les
                  présentes CGU prévaudront sur tout autre Document Contractuel.
                </p>
                <p>
                  En cas d’invalidité d’une ou plusieurs stipulations d’un ou
                  plusieurs de ces Documents Contractuels, en vertu d’une loi,
                  d’un règlement ou en application d’une décision définitive
                  d’une juridiction compétente, celle-ci sera sans aucune
                  conséquence sur la validité et l’effectivité des autres
                  stipulations dudit Document Contractuel et des autres
                  Documents Contractuels.
                </p>
                <p>
                  Les Acheteurs déclarent avoir pris connaissance, avoir compris
                  et accepter sans réserve ces Documents Contractuels.
                </p>
                <p>
                  Dans le cas où les Acheteurs accèdent directement aux Services
                  d’HOPFAB, sans Intermédiaire, ils acceptent les Documents
                  Contractuels au moment où ils soumettent une demande de
                  projet, au moment où il procèdent à la commande du projet et
                  en signant le devis du Vendeur présenté par HOPFAB.
                </p>
                <p>
                  Dans le cas où les Acheteurs accèdent et utilisent les
                  Services d’HOPFAB via un Intermédiaire, ils acceptent les
                  Documents Contractuels au moment où il procèdent à la commande
                  du projet et en signant le devis du Vendeur présenté par
                  HOPFAB.
                </p>
              </li>
              <li>
                <span className="font-bold">
                  1.5 - Documents contractuels régissant les relations entre les
                  Acheteurs et les Vendeurs
                </span>
                . Les Documents Contractuels régissant les relations entre
                HOPFAB et les Acheteurs, ne s’appliquent pas aux relations entre
                les Acheteurs et les Vendeurs. Les relations entre les Acheteurs
                et les Vendeurs sont régies par les devis établis par les
                Vendeurs et signés par les Acheteurs et par tout autre document
                incorporé contractuellement au sein de ceux-ci. Les Vendeurs
                établissent eux-mêmes les documents contenant les conditions
                applicables aux Projets et, en particulier, leurs
                caractéristiques, leurs prix, leurs conditions et modalités de
                paiement, et leurs conditions et modalités de livraison et
                d’installation. A défaut de document contenant les conditions
                applicables aux Projets, les dispositions légales applicables
                s’appliqueront en vertu du Code civil, du Code de commerce et/ou
                du Code de la consommation.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            2 - Utilisation des services d’HOPFAB par les Acheteurs
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">2.1 - Services d’HOPFAB</span>. Les
                Services d’HOPFAB accessibles aux Acheteurs sont décrits dans
                les Documents d’Information annexés aux présentes et/ou
                communiqués par HOPFAB et sur le Site d’HOPFAB.
              </li>
              <li>
                <span className="font-bold">
                  2.2 - Obligation générale de l’Acheteur
                </span>
                . L’Acheteur s’engage à accéder et à utiliser les Services
                d’HOPFAB conformément aux Documents d’Information et, plus
                généralement, aux Documents Contractuels et à la réglementation
                applicable.
              </li>
              <li>
                <span className="font-bold">
                  2.3 - Obligation spécifique de l’Acheteur de traiter et
                  contracter avec les Vendeurs présentés par HOPFAB via les
                  Services d’HOPFAB
                </span>
                . L’Acheteur s’engage à traiter et/ou contracter avec les
                Vendeurs présentés par HOPFAB par le seul intermédiaire des
                Services d’HOPFAB et s’interdit pareillement de traiter et/ou
                contracter directement et personnellement avec les Vendeurs
                présentés par HOPFAB ou, plus généralement, de faire des offres,
                propositions, sollicitations, incitations, ou démarchages auprès
                des Vendeurs présentés par HOPFAB, sans passer par
                l’intermédiaire des Services d’HOPFAB, pendant une durée d’un
                (1) an à l’issue de la dernière transaction intervenue entre
                l’Acheteur et ces Vendeurs ou, à défaut, à l’issue de la
                dernière présentation effectuée entre l’Acheteur et ces Vendeurs
                par HOPFAB, sauf accord contraire entre HOPFAB et l’Acheteur.
              </li>
              <li>
                <span className="font-bold">2.4 - </span>Dans le cas où
                l’Acheteur serait contacté par des Vendeurs après leur
                présentation par HOPFAB, il s’engage à en informer HOPFAB sans
                délai.
              </li>
              <li>
                <span className="font-bold">2.5 - </span>Dans le cas où
                l’Acheteur serait ou aurait été en relation contractuelle
                antérieure avec des Vendeurs avant leur présentation par HOPFAB,
                il s’engage également à en informer HOPFAB sans délai.
              </li>
              <li>
                <span className="font-bold">2.6 - </span>En cas d’impossibilité
                dûment constatée et justifiée de l’Acheteur de se conformer à
                ces obligations, il s’engage pareillement à en informer HOPFAB
                sans délai.
              </li>
              <li>
                <span className="font-bold">
                  2.7 - Gratuité des Services d’HOPFAB pour l’Acheteur.
                </span>
                L’utilisation des Services d’HOPFAB est gratuite pour
                l’Acheteur. Toutefois, l’ensemble des frais d’accès à Internet
                et de communications et transmissions nécessaires pour utiliser
                les Services d’HOPFAB reste à la charge de l’Acheteur.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            3 - Commande et paiement des projets par les Acheteurs
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  3.1 - Commandes des Projets par l’Acheteur
                </span>
                . Le processus de commandes des Projets par les Acheteurs sont
                décrits dans les Documents d’Information annexés aux présentes
                et/ou communiqués par HOPFAB.
              </li>
              <li>
                <span className="font-bold">3.2 - </span> L’Acheteur s’engage à
                soumettre à HOPFAB une description du Projet, en ce compris, des
                matériaux, dimensions, styles, plans, croquis ou visuels,
                calendrier et budget souhaités, suffisamment détaillée, précise
                et compréhensive, pour permettre à HOPFAB de présenter des
                Vendeurs les plus pertinents et aux Vendeurs de proposer des
                devis les plus concordants.
              </li>
              <li>
                <span className="font-bold">3.3 - </span> L’Acheteur s’engage à
                effectuer auprès d’HOPFAB le suivi du Projet, en ce compris, de
                la commande, réalisation, livraison et, si applicable,
                installation du Projet, tout au long du Projet, et à la première
                demande d’HOPFAB.
              </li>
              <li>
                <span className="font-bold">
                  3.4 - Paiement des Projets par l’Acheteur
                </span>
                . Le processus de paiement des Projets par les Acheteurs sont
                décrits dans les devis des Vendeurs.
              </li>
              <li>
                <span className="font-bold">3.5 - </span> Le calendrier de
                paiement des Projets est susceptible de varier en fonction des
                Projets, et notamment de leur taille et de leur durée.
              </li>
              <li>
                <span className="font-bold">3.6 - </span>A défaut de calendrier
                de paiement des Projets, le paiement des Projets par l’Acheteur
                s’effectuera selon les étapes suivantes :
                <ol className="list-decimal">
                  <li className="ml-7">
                    Pour tout Projet dont le prix, hors taxes, incluant les
                    frais d’installation mais excluant les frais de livraison,
                    est inférieur à 2.500 Euros, l’Acheteur devra payer
                    l’intégralité du devis dès la confirmation de la commande du
                    Projet ;
                  </li>
                  <li className="ml-7">
                    Pour tout Projet dont le prix, hors taxes, incluant les
                    frais d’installation mais excluant les frais de livraison,
                    est supérieur à 2.500 Euros, l’Acheteur devra payer un
                    acompte de 50% de cette somme ainsi que les frais de
                    livraison et d’installation dès la confirmation de la
                    commande du Projet, et le solde de 50% cinq (5) jours au
                    moins avant la livraison du Projet.
                  </li>
                </ol>
              </li>
              <li>
                <span className="font-bold">3.7 - </span>Les modalités de
                paiement des Projets par l’Acheteur s’effectue, soit par carte
                bancaire par l’intermédiaire de la plateforme de paiement
                accessible sur le Site d’HOPFAB, soit par virement bancaire sur
                le compte séquestre communiqué par HOPFAB, soit, pour les
                Projets de Travaux Tout Corps d’État, directement auprès des
                Vendeurs.
                <p>
                  En cas de paiement par carte bancaire par l’intermédiaire de
                  la plateforme de paiement accessible sur le Site d’HOPFAB, il
                  appartient à l’Acheteur de consulter les conditions
                  d’utilisation de cette plateforme de paiement. En payant par
                  carte bancaire, l’Acheteur communique à la plateforme de
                  paiement ses données bancaires, soit les seize chiffres et la
                  date d’expiration de sa carte bancaire ainsi que, le cas
                  échéant, les numéros du cryptogramme visuel, soit son relevé
                  d’identité bancaire. En communiquant ses données bancaires, il
                  autorise la collecte et la conservation par la plateforme de
                  paiement de ses données bancaires aux fins de paiement. En
                  validant le paiement, il autorise la plateforme de paiement à
                  débiter son compte bancaire du montant correspondant.
                </p>
                <p>
                  L’Acheteur reconnaît et accepte que la validation du paiement
                  constitue un ordre de paiement irrévocable. Le montant
                  correspondant sera immédiatement débité sur son compte
                  bancaire après vérification de ses données bancaires et à
                  réception de l’autorisation de débit de la part de la société
                  émettrice de celle-ci.
                </p>
                <p>
                  L’Acheteur reconnaît et accepte que l’impossibilité de débiter
                  le prix pour paiement entraînera la résolution immédiate,
                  automatique et de plein droit de la transaction avec le
                  Vendeur et l’annulation de la commande de Projet.
                </p>
                <p>
                  L’Acheteur garantit disposer des autorisations nécessaires
                  pour utiliser le numéro de carte bancaire ou de compte
                  bancaire fournit par lui et, le cas échéant, avoir pris les
                  mesures nécessaires pour permettre le prélèvement sur le
                  numéro de carte bancaire ou de compte bancaire fournit par
                  lui.
                </p>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            4 - Rétractation et réclamation relatives aux Projets par les
            Acheteurs
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  4.1 - Rétractation - Absence de droit de rétractation - de
                  l’Acheteur
                </span>
                . L’Acheteur reconnaît et accepte qu’il ne dispose pas de droit
                de rétractation dès lors qu’il achète des Projets confectionnés
                et/ou personnalisés sur-mesure et à sa demande, conformément à
                l’article L121-28 du Code de la consommation.
              </li>
              <li>
                <span className="font-bold">
                  4.2 - Livraison des Projets à l’Acheteur
                </span>
                . Les Vendeurs seront seuls responsables de la livraison des
                Projets à l’Acheteur dans les délais fournis dans les devis.
                Toutefois, ils ne seront pas responsables du non-respect des
                délais fournis dans les devis, si celui-ci est imputable à
                l’Acheteur et, notamment, au non-respect du délai de signature
                du devis par l’Acheteur, au non-respect des échéances du
                calendrier du Projet incombant à l’Acheteur, ou à une demande de
                modifications ou extensions des Projets de l’Acheteur. Toute
                demande de modifications ou extensions des Projets de l’Acheteur
                donnera lieu à un devis complémentaire du Vendeur qui fera
                l’objet d’une acceptation préalable de l’Acheteur. A défaut, la
                demande de modifications ou extensions des Projets suivant la
                commande du Projet ne pourra pas être prise en compte.
              </li>
              <li>
                <span className="font-bold">
                  4.3 - Non-réception des Projets par l’Acheteur
                </span>
                . Si les Projets ne sont pas réceptionnés à la date prévue de
                livraison, il appartient à l’Acheteur d’émettre les réserves et
                réclamations et, le cas échéant, de prendre les mesures et
                engager les procédures qu’il estime nécessaires directement à
                l’encontre des Vendeurs. Il lui appartient également d’en
                informer HOPFAB sans délai.
              </li>
              <li>
                <span className="font-bold">
                  4.4 - Endommagement des Projets
                </span>
                . Si les Projets Commandés sont endommagés à la livraison, il
                appartient à l’Acheteur d’émettre les réserves et réclamations
                qu’il estime nécessaires au moment de la livraison, voire de
                refuser la livraison et, soit directement auprès du
                transporteur, soit directement auprès du Vendeur et, le cas
                échéant, de prendre les mesures et engager les procédures qu’il
                estime nécessaires directement à l’encontre des Vendeurs. Il lui
                appartient également d’en informer HOPFAB sans délai.
              </li>
              <li>
                <span className="font-bold">
                  4.5 - Non-conformité, défauts, vices des Projets
                </span>
                . Si les Projets ne sont pas conformes à la commande et/ou sont
                affectés de tout autre défaut et/ou vice, il appartient à
                l’Acheteur d’émettre les réserves et réclamations et, le cas
                échéant, de prendre les mesures et engager les procédures qu’il
                estime nécessaires directement à l’encontre des Vendeurs. Il lui
                appartient également d’en informer HOPFAB sans délai. Toutefois,
                l’Acheteur reconnaît et accepte que les Projets sont
                confectionnés ou personnalisés sur-mesure et à sa demande à
                partir de projets, produits ou matériaux dont l’aspect, par
                nature, peut varier et différer des photographies des Projets,
                produits ou matériaux présentés (tels que, par exemple, l’aspect
                du bois).
              </li>
              <li>
                <span className="font-bold">
                  4.6 - Différends sur les Projets
                </span>
                . En cas de différend entre l’Acheteur et les Vendeurs,
                l’Acheteur s’engage également à en informer HOPFAB sans délai.
                Dans ce cas, HOPFAB pourra proposer un accompagnement dans la
                médiation avec les Vendeurs.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            5 - Rôle et responsabilité d’HOPFAB à l’égard des Acheteurs
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  5.1 - Relations entre l’Acheteur et les Vendeurs via les
                  Services d’HOPFAB
                </span>
                . L’Acheteur reconnait et accepte qu’il sera seul responsable
                avec les Vendeurs au titre des contrats conclus avec les
                Vendeurs et qu’il fera son affaire personnelle de toute
                réclamation, prétention et/ou action relative aux contrats
                conclus avec les Vendeurs. En conséquence, HOPFAB ne pourra pas
                être tenue pour responsable au titre des contrats conclus entre
                l’Acheteur et les Vendeurs et, notamment, du fait de la
                non-exécution ou de la mauvaise exécution de ces contrats.
              </li>
              <li>
                <span className="font-bold">
                  5.2 - Accès et utilisation des services d’HOPFAB
                </span>
                . HOPFAB fait ses meilleurs efforts pour assurer l’accès et
                l’utilisation de ses Services et notamment de son Site et les
                transmissions qui se font par son intermédiaire mais ne garantit
                pas qu’ils se feront sans interruption et sans erreur.
              </li>
              <li>
                <span className="font-bold">5.3 -</span>. HOPFAB ne pourra être
                tenue pour responsable (i) des interruptions occasionnelles et
                temporaires pour des raisons de maintenance et/ou de
                modification de ses Services et notamment de son Site, (ii) des
                interruptions qui ne résulteraient pas de son fait, mais du fait
                des Vendeurs et/ou Acheteurs et/ou Intermédiaires, du fait de
                circonstances extérieures imprévisibles et insurmontables, ou de
                cas de force majeure, (iii) de retards ou de manquements à ses
                propres obligations résultant des présentes CGU ou, plus
                généralement, des Documents Contractuels, qui ne résulteraient
                pas de son fait, mais du fait des Vendeurs et/ou Acheteurs et/ou
                Intermédiaires, du fait de circonstances extérieures
                imprévisibles et insurmontables, ou de cas de force majeure, et
                (iv) du contenu des sites tiers vers lesquels renvoient les
                liens présents sur le Site et/ou à travers les Services qu’elle
                ne contrôle pas.
              </li>
              <li>
                <span className="font-bold">5.4 -</span>. En tout état de cause,
                HOPFAB ne pourra être tenue pour responsable que des dommages
                directs prévisibles et avérés subis au titre de l’accès et
                l’utilisation de ses Services et notamment de son Site. En
                particulier, HOPFAB ne pourra être tenue pour responsable des
                dommages indirects, perte commerciales, pertes de revenus,
                pertes de profits, pertes de bénéfices, pertes de contrats,
                pertes de clientèles, perte de chance, manque à gagner, pertes
                de données, atteinte aux données, atteinte à l’image ou à la
                réputation ou préjudice moral.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            6 - Droits de Propriété Intellectuelle
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  6.1 - Droits de Propriété Intellectuelle d’HOPFAB
                </span>
                . Tout élément, contenu et information, en ce compris les
                marques, dénominations, logos, textes, visuels, images,
                photographies, musiques, vidéos, dessins, modèles, logiciels,
                bases de données, droits d’auteurs, etc. présents, publiés ou
                rendus disponibles via les Services de HOPFAB, à l’exception de
                ceux fournis par les Acheteurs et/ou Intermédiaires et/ou
                Vendeurs, sont la propriété exclusive d’HOPFAB (ci-après la "
                <span className="font-bold">
                  Propriété Intellectuelle d’HOPFAB
                </span>
                ").
              </li>
              <li>
                <span className="font-bold">6.2 - </span>Toute reproduction,
                représentation, modification, extraction, utilisation,
                réutilisation et/ou exploitation de tout ou partie de la
                Propriété Intellectuelle d’HOPFAB, sans l’autorisation
                préalable, expresse et écrite d’HOPFAB est strictement
                interdite, sous réserve de ce qui est autorisé par la loi.
              </li>
              <li>
                <span className="font-bold">
                  6.3 - Droits de Propriété Intellectuelle de l’Acheteur
                </span>
                . Tout élément, contenu et information, en ce compris les
                marques, dénominations, logos, textes, visuels, images,
                photographies, musiques, vidéos, dessins, modèles, logiciels,
                bases de données, droits d’auteur, etc., relatifs ou non à un
                Projet conçu par l’Acheteur et fournis via les Services de
                HOPFAB, restent la propriété de l’Acheteur (ci-après la "
                <span className="font-bold">
                  Propriété Intellectuelle de l’Acheteur
                </span>
                ").
              </li>
              <li>
                <span className="font-bold">6.4 - </span>L’Acheteur garantit
                qu’il est titulaire des Droits de Propriété Intellectuelle de
                l’Acheteur, qu’il a fait son affaire personnelle de toutes
                cessions, licences ou autorisations auprès de tous designers,
                artistes, artisans, sous-traitants, prestataires de services ou
                autres tiers qui auraient créé ou collaboré à la conception, la
                réalisation ou l’exploitation de la Propriété Intellectuelle de
                l’Acheteur et/ou des Projets de l’Acheteur, et qu’il est libre
                d’utiliser et d’exploiter et de concéder le droit d’utiliser et
                d’exploiter la Propriété Intellectuelle de l’Acheteur aux
                Vendeurs, et de faire concevoir, réaliser, fabriquer, offrir à
                la vente, vendre, commercialiser les Projets de l’Acheteur par
                les Vendeurs. Il garantit HOPFAB contre toutes réclamations,
                prétentions et/ou actions de toute nature relatives la Propriété
                Intellectuelle de l’Acheteur et/ou les Projets de l’Acheteur.
              </li>
              <li>
                <span className="font-bold">6.5 - </span>L’Acheteur autorise
                HOPFAB à réaliser des photographies et/ou vidéos des Projets,
                une fois réalisés et livrés à l’Acheteur par le Vendeur, et à
                les utiliser, présenter, représenter et communiquer au public.
                <p>
                  L’Acheteur autorise HOPFAB à utiliser sa marque, sa
                  dénomination, son logo, et les photographies du Projet
                  transmises par lui, à titre de référence professionnelle et
                  commerciale, auprès du public.
                </p>
                <p>
                  Ces utilisations seront réalisées (i) sur le Site d’HOPFAB,
                  (ii) sur les sites de tiers partenaires d’HOBFAB, (iii) sur
                  les réseaux sociaux d’HOBFAB, (iv) sur les catalogues
                  d’HOPFAB, (v) sur les présentations et communications
                  commerciales, promotionnelles et publicitaires d’HOBFAB, (vi)
                  dans la presse papier et audiovisuelle, et (vii) dans le cadre
                  de foires, d’expositions ou de toutes autres manifestations
                  publiques.
                </p>
                <p>
                  Ces utilisations seront réalisées (i) aux fins de mise en
                  relation entre les Acheteurs et/ou leurs Intermédiaires et les
                  Vendeurs, (ii) aux fins de présentation, communication,
                  promotion et publicité relatives aux Vendeurs, à leurs Projets
                  et à leur produits ou matériaux, et (iii) aux fins de
                  présentation, communication, promotion et publicité relatives
                  à HOPFAB, à ses Services et à son Site et à leur exploitation.
                </p>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            7 - Durée, révision, résiliation (suspension/exclusion)
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">7.1 - Durée</span>. Les présentes
                CGU et les Documents Contractuels incorporés contractuellement
                au sein de celles-ci sont applicables à compter de leur
                acceptation par l’Acheteur et jusqu’à leur résiliation par
                l’Acheteur et/ou par HOPFAB.
              </li>
              <li>
                <span className="font-bold">7.2 - Révision</span>. HOPFAB se
                réserve le droit de modifier les présentes CGU et les Documents
                Contractuels incorporés contractuellement au sein de celles-ci,
                notamment pour refléter des évolutions de ses Services et
                notamment de son Site et/ou des dispositions législatives et
                réglementaires applicables. Ces modifications seront signalées
                par tout moyen utile et notamment par la publication d’une
                mention de mise à jour avec la date de mise à jour, au sein de
                celles-ci. Elles ne s’appliqueront pas aux transactions en cours
                mais seulement aux futures transactions entre l’Acheteur et les
                Vendeurs. Si l’Acheteur n’accepte pas ces modifications, il ne
                pourra pas continuer d’utiliser et devra cesser toute
                utilisation des Services d’HOPFAB, sans préjudice du respect des
                obligations ayant vocation à perdurer à la cessation de cette
                utilisation.
              </li>
              <li>
                <span className="font-bold">7.3 - Résiliation</span>. HOPFAB et
                l’Acheteur se réservent respectivement le droit, pour
                convenance, de résilier les présentes CGU et les Documents
                Contractuels, sans préavis, sans recours aux juridictions et par
                simple courrier électronique avec accusé de réception adressé à
                HOPFAB et/ou à l’Acheteur. Cette résiliation n’aura effet qu’à
                l’issue des dernières transactions en cours entre l’Acheteur et
                les Vendeurs via les Services d’HOPFAB.
              </li>
              <li>
                <span className="font-bold">7.4 - </span>HOPFAB et l’Acheteur se
                réservent respectivement le droit, en cas de faute, de résilier
                les présentes CGU et les Documents Contractuels, sans préavis,
                sans recours aux juridictions et par simple courrier
                électronique avec accusé de réception adressé à HOPFAB et/ou à
                l’Acheteur, sans préjudice de toute demande de cessation de la
                faute et de réparation du préjudice en résultant. Cette
                résiliation aura effet immédiat, sauf accord contraire entre
                HOPFAB et l’Acheteur.
              </li>
              <li>
                <span className="font-bold">7.5 - </span>HOPFAB se réserve
                également le droit, en cas de faute, de supprimer et/ou de
                suspendre l’accès et l’utilisation de ses Services par
                l’Acheteur, de supprimer et/ou de suspendre les éléments,
                contenus ou informations mis à disposition sur ses Services par
                l’Acheteur, et d’annuler toute offre de vente d’un Projet d’un
                Vendeur à l’Acheteur, sans préjudice de la possibilité de
                résilier les présentes CGU et les Documents Contractuels, dans
                les conditions susvisées.
              </li>
              <li>
                <span className="font-bold">7.6 - </span>
                Dans tous les cas, les stipulations qui devraient
                raisonnablement perdurer après la résiliation resteront en
                vigueur et, notamment mais non-exclusivement, les Articles 2.3 à
                2.6 relatifs à l’obligation de traiter et contracter avec les
                Vendeurs présentés par HOPFAB via les Services d’HOPFAB, les
                Articles 3.1 à 3.7 relatifs à l’obligation de passer commande et
                de procéder au paiement des Vendeurs présentés par HOPFAB via
                les Services d’HOPFAB, et les Articles 6.1 à 6.5 relatifs à la
                propriété intellectuelle.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            8 - Loi applicable et juridiction compétente (Attribution de
            juridiction)
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">8.1 - Loi applicable</span>. Les
                présentes CGU et les Documents Contractuels sont régies par la
                loi française.
              </li>
              <li>
                <span className="font-bold">8.2 - Juridiction compétente</span>.
                Tout litige avec un Acheteur n’agissant pas en tant que
                professionnel et résultant de la formation, de l’interprétation
                ou de l’exécution des présentes CGU sera porté devant les
                tribunaux compétents en vertu des règles de procédure civile
                française.
              </li>
              <li>
                <span className="font-bold">
                  8.3 - Attribution de juridiction. Tout litige avec un Acheteur
                  agissant à titre professionnel et résultant de la formation,
                  de l’interprétation ou de l’exécution des présentes CGU sera
                  de la compétence exclusive des tribunaux du ressort de Paris,
                  nonobstant pluralité de défendeurs ou appel en garantie.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div id="tab-intermediaire" className={`max-w-3xl m-auto ${currentTab === "tab-intermediaire" ? "" : "hidden"}`} aria-labelledby="button-tab-intermediaire" role="tabpanel">
          <div className="text-center mb-4">Mises à jour le 10 avril 2020</div>

          <h2 className="text-2xl font-bold mb-3">
            Conditions Générales d’Utilisation entre Hopfab et Intermédiaires
          </h2>

          <h3 className="text-xl font-bold mb-3">
            1 - Présentation et objet des présentes Conditions Générales
            d’Utilisation
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">1.1 - Présentation d’HOPFAB</span>.
                HOPFAB est une société par actions simplifiée au capital social
                de 11 337,30 €, immatriculée au Registre du Commerce et des
                Sociétés de Bobigny sous le numéro 813 770 500 et dont le siège
                social est situé au 12, Rue Anselme, 93400, Saint-Ouen ("
                <span className="font-bold">HOPFAB</span>").
              </li>
              <li>
                <span className="font-bold">
                  1.2 - Présentation de d’activité d’HOPFAB
                </span>
                . HOPFAB a pour activité le développement et l’exploitation
                d’une plateforme accessible à l’adresse
                <a className="mx-1 underline" href="https://hopfab.com">
                  https://hopfab.com
                </a>
                (le "<span className="font-bold">Site</span>") et, plus
                généralement, la fourniture de services de mise en relation et
                de facilitation des transactions (les "
                <span className="font-bold">Services</span>") entre des vendeurs
                (les "<span className="font-bold">Vendeurs</span>") et des
                acheteurs potentiels particuliers ou professionnels (les "
                <span className="font-bold">Acheteurs</span>") ou des
                intermédiaires tels que des architectes agissant pour ces
                clients potentiels (les "
                <span className="font-bold">Intermédiaires</span>
                "), sur des projets de mobilier, d’agencement, d’aménagement, de
                décoration, de luminaire, de signalétique, de végétalisation
                d’espaces ou de travaux (les "
                <span className="font-bold">Projets</span>"), qu’il s’agisse de
                projets issus d’un concept, d’un plan ou d’un croquis propre aux
                Acheteurs et/ou Intermédiaires (les "
                <span className="font-bold">Projets Sur-Mesure</span>"), de
                projets relatifs à un produit proposé par les Vendeurs (les "
                <span className="font-bold">Projets Sur-Catalogue</span>") ou de
                projets de travaux tout corps d’état (les "
                <span className="font-bold">
                  Projets de Travaux Tout Corps d’État
                </span>
                "). HOPFAB est un acteur reconnu dans son secteur d’activité et
                a développé un réseau important de Vendeurs et des relations
                privilégiées avec des Acheteurs et des Intermédiaires, grâce à
                ses compétences, son expérience, son savoir-faire et, plus
                particulièrement, par le biais de ses actions de promotion et de
                prospection.
              </li>
              <li>
                <span className="font-bold">
                  1.3 - Relation entre HOPFAB et les Intermédiaires
                </span>
                . HOPFAB a la qualité de tiers de confiance facilitant la mise
                en relation et les transactions entre les Vendeurs et les
                Acheteurs et/ou Intermédiaires. HOPFAB n’est ni Vendeur, ni
                Acheteur, ni Intermédiaire. HOPFAB n’a pas le pouvoir de
                conclure des contrats avec des Vendeurs au nom et pour le compte
                des Acheteurs et/ou Intermédiaires et, plus généralement, d’agir
                au nom et/ou pour le compte des Acheteurs et/ou Intermédiaires.
                Les relations entre HOPFAB et les Intermédiaires ne sauraient en
                aucun cas s’analyser comme créant une relation de salariat, un
                contrat de voyageur, représentant ou placier, un contrat d’agent
                commercial, un mandat d’intérêt commun ou un mandat, toute
                relation de cette nature étant expressément exclue.
              </li>
              <li>
                <span className="font-bold">
                  1.4 - Documents contractuels régissant les relations entre
                  HOPFAB et les Intermédiaires
                </span>
                . Les relations entre HOPFAB et les Intermédiaires sont régies
                par les présentes Conditions Générales d’Utilisation (les "
                <span className="font-bold">CGU</span>") et par tout autre
                document incorporé contractuellement au sein de celles-ci, à
                savoir, les documents d’information sur les Services d’HOPFAB,
                les conditions d’accès et d’utilisation des Services d’HOPFAB et
                la politique de protection des données d’HOPFAB (les "
                <span className="font-bold">Documents d’Information</span>")
                annexés aux présentes et/ou communiqués par HOPFAB (ensemble,
                les "<span className="font-bold">Documents Contractuels</span>
                ").
                <p>
                  Les présentes CGU ont pour objet de déterminer les conditions
                  dans lesquelles HOPFAB identifiera et présentera aux
                  Intermédiaires agissant pour le compte d’Acheteurs, des
                  Vendeurs susceptibles de réaliser leurs Projets.
                </p>
                <p>
                  Les Documents d’Information ont pour objet d’établir et de
                  fournir les indications nécessaires et utiles sur les
                  conditions d’accès et d’utilisation des Services d’HOPFAB et
                  la politique de protection des données d’HOPFAB.
                </p>
                <p>
                  En cas de contradiction entre ces Documents Contractuels, les
                  présentes CGU prévaudront sur tout autre Document Contractuel.
                </p>
                <p>
                  En cas d’invalidité d’une ou plusieurs stipulations d’un ou
                  plusieurs de ces Documents Contractuels, en vertu d’une loi,
                  d’un règlement ou en application d’une décision définitive
                  d’une juridiction compétente, celle-ci sera sans aucune
                  conséquence sur la validité et l’effectivité des autres
                  stipulations dudit Document Contractuel et des autres
                  Documents Contractuels.
                </p>
                <p>
                  Les Intermédiaires déclarent avoir pris connaissance, avoir
                  compris et accepter sans réserve ces Documents Contractuels,
                  leur acceptation étant matérialisée au moment où ils
                  soumettent une demande de projet et au moment où ils font
                  procéder à la commande du projet et à la signature du devis du
                  Vendeur par l’Acheteur.
                </p>
                <p>
                  Ils déclarent également avoir pris connaissance et avoir
                  compris les conditions générales d’utilisation pour les
                  Acheteurs, accessibles sur le Site d’HOPFAB et/ou communiquées
                  par HOPFAB, pour leur parfaite information sur le
                  fonctionnement des Services d’HOPFAB.
                </p>
                <p>
                  Ils s’engagent également expressément à informer et à
                  communiquer aux Acheteurs pour le compte desquels ils
                  agissent, les conditions générales d’utilisation pour les
                  Acheteurs, accessibles sur le Site d’HOPFAB et/ou communiquées
                  par HOPFAB, et se portent fort de leur acceptation par eux.
                </p>
              </li>
              <li>
                <span className="font-bold">
                  1.5 - Documents contractuels régissant les relations entre les
                  Intermédaires et/ou Acheteurs et les Vendeurs
                </span>
                . Les Documents Contractuels régissant les relations entre
                HOPFAB et les Intermédiaires et/ou Acheteurs, ne s’appliquent
                pas aux relations entre les Intermédiaires et/ou Acheteurs et
                les Vendeurs. Les relations entre les Intermédiaires et/ou
                Acheteurs et les Vendeurs sont régies par les devis établis par
                les Vendeurs et signés par les Acheteurs et/ou Intermédiaires et
                par tout autre document incorporé contractuellement au sein de
                ceux-ci. Les Vendeurs établissent eux-mêmes les documents
                contenant les conditions applicables aux Projets et, en
                particulier, leurs caractéristiques, leurs prix, leurs
                conditions et modalités de paiement, et leurs conditions et
                modalités de livraison et d’installation. A défaut de document
                contenant les conditions applicables aux Projets, les
                dispositions légales applicables s’appliqueront en vertu du Code
                civil, du Code de commerce et/ou du Code de la consommation.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            2 - Utilisation des services d’HOPFAB par les Intermédiaires
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">2.1 - Services d’HOPFAB</span>. Les
                Services d’HOPFAB accessibles aux Intermédiaires sont décrits
                dans les Documents d’Information annexés aux présentes et/ou
                communiqués par HOPFAB et sur le Site d’HOPFAB.
              </li>
              <li>
                <span className="font-bold">
                  2.2 - Obligation générale de l’Intermédiaire
                </span>
                . L’Intermédiaire s’engage à accéder et à utiliser les Services
                d’HOPFAB conformément aux Documents d’Information et, plus
                généralement, aux Documents Contractuels et à la réglementation
                applicable.
              </li>
              <li>
                <span className="font-bold">
                  2.3 - Obligation spécifique de l’Intermédiaire de traiter et
                  contracter avec les Vendeurs présentés par HOPFAB via les
                  Services d’HOPFAB
                </span>
                . L’Intermédiaire s’engage à traiter et/ou contracter avec les
                Vendeurs présentés par HOPFAB par le seul intermédiaire des
                Services d’HOPFAB et s’interdit pareillement de traiter et/ou
                contracter directement et personnellement avec les Vendeurs
                présentés par HOPFAB ou, plus généralement, de faire des offres,
                propositions, sollicitations, incitations, ou démarchages auprès
                des Vendeurs présentés par HOPFAB, sans passer par
                l’intermédiaire des Services d’HOPFAB, pendant une durée d’un
                (1) an à l’issue de la dernière transaction intervenue entre
                l’Intermédiaire et/ou l’Acheteur et ces Vendeurs ou, à défaut, à
                l’issue de la dernière présentation effectuée entre
                l’Intermédiaire et/ou l’Acheteur et ces Vendeurs par HOPFAB,
                sauf accord contraire entre HOPFAB et l’Intermédiaire et/ou
                l’Acheteur.
              </li>
              <li>
                <span className="font-bold">2.4 - </span>Dans le cas où
                l’Intermédiaire et/ou l’Acheteur serait contacté par des
                Vendeurs après leur présentation par HOPFAB, l’Intermédiaire
                s’engage à en informer HOPFAB sans délai.
              </li>
              <li>
                <span className="font-bold">2.5 - </span>Dans le cas où
                l’Intermédiaire et/ou l’Acheteur serait ou aurait été en
                relation contractuelle antérieure avec des Vendeurs avant leur
                présentation par HOPFAB, l’Intermédiaire s’engage également à en
                informer HOPFAB sans délai.
              </li>
              <li>
                <span className="font-bold">2.6 - </span> En cas d’impossibilité
                dûment constatée et justifiée de l’Intermédiaire et/ou
                l’Acheteur de se conformer à ces obligations, l’Intermédiaire
                s’engage pareillement à en informer HOPFAB sans délai.
              </li>
              <li>
                <span className="font-bold">
                  2.7 - Gratuité des services d’HOPFAB par l’Acheteur
                </span>
                . L’utilisation des Services d’HOPFAB est gratuite pour
                l’Intermédiaire et l’Acheteur. Toutefois, l’ensemble des frais
                d’accès à Internet et de communications et transmissions
                nécessaires pour utiliser les Services d’HOPFAB reste à la
                charge de l’Intermédiaire et de l’Acheteur.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            3 - Obligations des Intermédiaires
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  3.1 - Capacité et pouvoir de l’Intermédiaire
                </span>
                . L’Intermédiaire s’engage à avoir la pleine capacité juridique
                et le pouvoir pour traiter et négocier au nom et pour le compte
                des Acheteurs pour le compte desquels il agit.
              </li>
              <li>
                <span className="font-bold">3.2 - Commandes des Projets</span>.
                Le processus de commandes des Projets par les Acheteurs sont
                décrits dans les Documents d’Information annexés aux présentes
                et/ou communiqués par HOPFAB.
              </li>
              <li>
                <span className="font-bold">3.3 - </span>L’Intermédiaire
                s’engage à respecter ce processus et à prendre toutes les
                mesures nécessaires pour qu’il soit pleinement respecté par les
                Acheteurs pour le compte desquels il agit.
              </li>
              <li>
                <span className="font-bold">3.4 - </span>L’Intermédiaire
                s’engage à soumettre à HOPFAB une description du Projet, en ce
                compris, des matériaux, dimensions, styles, plans, croquis ou
                visuels, calendrier et budget souhaités, suffisamment détaillée,
                précise et compréhensive, pour permettre à HOPFAB de présenter
                des Vendeurs les plus pertinents et aux Vendeurs de proposer des
                devis les plus concordants.
              </li>
              <li>
                <span className="font-bold">3.5 - </span>L’Intermédiaire
                s’engage à effectuer auprès d’HOPFAB le suivi du Projet, en ce
                compris, de la commande, réalisation, livraison et, si
                applicable, installation du Projet, tout au long du Projet, et à
                la première demande d’HOPFAB.
              </li>
              <li>
                <span className="font-bold">
                  3.6 - Paiement des Projets par l’Acheteur
                </span>
                . Le processus de paiement des Projets par les Acheteurs sont
                décrits dans les devis des Vendeurs.
              </li>
              <li>
                <span className="font-bold">3.7 - </span> L’Intermédiaire
                s’engage à respecter ce processus et à prendre toutes les
                mesures nécessaires pour qu’il soit pleinement respecté par les
                Acheteurs pour le compte desquels il intervient.
              </li>
              <li>
                <span className="font-bold">
                  3.8 - Différends sur les Projets
                </span>
                . En cas de différend entre l’Intermédiaire et/ou son Acheteur
                et les Vendeurs, l’Intermédiaire s’engage à en informer HOPFAB
                sans délai. Dans ce cas, HOPFAB pourra proposer un
                accompagnement dans la médiation avec les Vendeurs.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            4 - Rôle et responsabilité d’HOPFAB à l’égard des Intermédiaires
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  4.1 - Relations entre l’Intermédiaire et les Vendeurs via les
                  Services d’HOPFAB
                </span>
                . L’Intermédiaire reconnait et accepte que l’Acheteur et
                lui-même sont seuls responsables avec les Vendeurs au titre des
                contrats conclus avec les Vendeurs et qu’ils feront leur affaire
                personnelle de toute réclamation, prétention et/ou action
                relative aux contrats conclus avec les Vendeurs. En conséquence,
                HOPFAB ne pourra pas être tenue pour responsable au titre des
                contrats conclus entre l’Acheteur et les Vendeurs et, notamment,
                du fait de la non-exécution ou de la mauvaise exécution de ces
                contrats.
              </li>
              <li>
                <span className="font-bold">
                  4.2 - Accès et fonctionnement des Services d’HOPFAB
                </span>
                . HOPFAB fait ses meilleurs efforts pour assurer l’accès et
                l’utilisation de ses Services et notamment de son Site et les
                transmissions qui se font par son intermédiaire mais ne garantit
                pas qu’ils se feront sans interruption et sans erreur.
              </li>
              <li>
                <span className="font-bold">4.3 - </span>HOPFAB ne pourra être
                tenue pour responsable (i) des interruptions occasionnelles et
                temporaires pour des raisons de maintenance et/ou de
                modification de ses Services et notamment de son Site, (ii) des
                interruptions qui ne résulteraient pas de son fait, mais du fait
                des Vendeurs et/ou Acheteurs et/ou Intermédiaires, du fait de
                circonstances extérieures imprévisibles et insurmontables, ou de
                cas de force majeure, (iii) de retards ou de manquements à ses
                propres obligations résultant des présentes CGU ou, plus
                généralement, des Documents Contractuels, qui ne résulteraient
                pas de son fait, mais du fait des Vendeurs et/ou Acheteurs et/ou
                Intermédiaires, du fait de circonstances extérieures
                imprévisibles et insurmontables, ou de cas de force majeure, et
                (iv) du contenu des sites tiers vers lesquels renvoient les
                liens présents sur le Site et/ou à travers les Services qu’elle
                ne contrôle pas.
              </li>
              <li>
                <span className="font-bold">4.4 - </span>En tout état de cause,
                HOPFAB ne pourra être tenue pour responsable que des dommages
                directs prévisibles et avérés subis au titre de l’accès et
                l’utilisation de ses Services et notamment de son Site. En
                particulier, HOPFAB ne pourra être tenue pour responsable des
                dommages indirects, perte commerciales, pertes de revenus,
                pertes de profits, pertes de bénéfices, pertes de contrats,
                pertes de clientèles, perte de chance, manque à gagner, pertes
                de données, atteinte aux données, atteinte à l’image ou à la
                réputation ou préjudice moral.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            5 - Droits de Propriété Intellectuelle
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">
                  5.1 - Droits de Propriété Intellectuelle d’HOPFAB
                </span>
                . Tout élément, contenu et information, en ce compris les
                marques, dénominations, logos, textes, visuels, images,
                photographies, musiques, vidéos, dessins, modèles, logiciels,
                bases de données, droits d’auteur, etc. présents, publiés ou
                rendus disponibles via les Services de HOPFAB, à l’exception de
                ceux fournis par les Intermédiaires et/ou Acheteurs et/ou
                Vendeurs, sont la propriété exclusive d’HOPFAB (la "
                <span className="font-bold">
                  Propriété Intellectuelle d’HOPFAB
                </span>
                ").
              </li>
              <li>
                <span className="font-bold">5.2 - </span>Toute reproduction,
                représentation, modification, extraction, utilisation,
                réutilisation et/ou exploitation de tout ou partie de la
                Propriété Intellectuelle d’HOPFAB, sans l’autorisation
                préalable, expresse et écrite d’HOPFAB est strictement
                interdite, sous réserve de ce qui est autorisé par la loi.
              </li>
              <li>
                <span className="font-bold">
                  5.3 - Droits de Propriété Intellectuelle de l’Intermédiaire
                </span>
                . Tout élément, contenu et information, en ce compris les
                marques, dénominations, logos, textes, visuels, images,
                photographies, musiques, vidéos, dessins, modèles, logiciels,
                bases de données, droits d’auteur, etc., relatifs ou non à un
                Projet conçu par l’Intermédiaire et fournis via les Services
                d’HOPFAB, restent la propriété de l’Intermédiaire (ci-après la "
                <span className="font-bold">
                  Propriété Intellectuelle de l’Intermédiaire
                </span>
                ").
              </li>
              <li>
                <span className="font-bold">5.4 - </span>L’Intermédiaire
                garantit qu’il est titulaire des Droits de Propriété
                Intellectuelle de l’Intermédiaire, qu’il a fait son affaire
                personnelle de toutes cessions, licences ou autorisations auprès
                de tous designers, artistes, artisans, sous-traitants,
                prestataires de services ou autres tiers qui auraient créé ou
                collaboré à la conception, la réalisation ou l’exploitation de
                la Propriété Intellectuelle de l’Intermédiaire et/ou des Projets
                de l’Intermédiaire, et qu’il est libre d’utiliser et d’exploiter
                et de concéder le droit d’utiliser et d’exploiter la Propriété
                Intellectuelle de l’Intermédiaire aux Vendeurs, et de faire
                concevoir, réaliser, fabriquer, offrir à la vente, vendre,
                commercialiser les Projets de l’Intermédiaire par les Vendeurs.
                Il garantit HOPFAB contre toutes réclamations, prétentions et/ou
                actions de toute nature relatives la Propriété Intellectuelle de
                l’Intermédiaire et/ou les Projets de l’Intermédiaire.
              </li>
              <li>
                <span className="font-bold">5.5 - </span>L’Intermédiaire
                autorise HOPFAB à réaliser des photographies et/ou vidéos des
                Projets, une fois réalisés et livrés à l’Acheteur par le
                Vendeur, et à les utiliser, présenter, représenter et
                communiquer au public.
                <p>
                  L’Intermédiaire autorise HOPFAB à utiliser sa marque, sa
                  dénomination, son logo, et les photographies du Projet
                  transmises par lui, à titre de référence professionnelle et
                  commerciale, auprès du public.
                </p>
                <p>
                  Ces utilisations seront réalisées (i) sur le Site d’HOPFAB,
                  (ii) sur les sites de tiers partenaires d’HOBFAB, (iii) sur
                  les réseaux sociaux d’HOBFAB, (iv) sur les catalogues
                  d’HOPFAB, (v) sur les présentations et communications
                  commerciales, promotionnelles et publicitaires d’HOBFAB, (vi)
                  dans la presse papier et audiovisuelle, et (vii) dans le cadre
                  de foires, d’expositions ou de toutes autres manifestations
                  publiques.
                </p>
                <p>
                  Ces utilisations seront réalisées (i) aux fins de mise en
                  relation entre les Intermédiaires et/ou leurs Acheteurs et les
                  Vendeurs, (ii) aux fins de présentation, communication,
                  promotion et publicité relatives aux Vendeurs, à leurs Projets
                  et à leur produits ou matériaux, et (iii) aux fins de
                  présentation, communication, promotion et publicité relatives
                  à HOPFAB, à ses Services et à son Site et à leur exploitation.
                </p>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            6 - Durée, révision, résiliation (suspension/exclusion)
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">6.1 - Durée</span>. Les présentes
                CGU et les Documents Contractuels incorporés contractuellement
                au sein de celles-ci sont applicables à compter de leur
                acceptation par l’Intermédiaire et jusqu’à leur résiliation par
                l’Intermédiaire et/ou par HOPFAB.
              </li>
              <li>
                <span className="font-bold">6.2 - Révision</span>. HOPFAB se
                réserve le droit de modifier les présentes CGU et les Documents
                Contractuels incorporés contractuellement au sein de celles-ci,
                notamment pour refléter des évolutions de ses Services et
                notamment de son Site et/ou des dispositions législatives et
                réglementaires applicables. Ces modifications seront signalées
                par tout moyen utile et notamment par la publication d’une
                mention de mise à jour avec la date de mise à jour, au sein de
                celles-ci. Elles ne s’appliqueront pas aux transactions en cours
                mais seulement aux futures transactions entre les Acheteurs pour
                le compte desquels intervient l’Intermédiaire et les Vendeurs.
                Si l’Intermédiaire n’accepte pas ces modifications, il ne pourra
                pas continuer d’utiliser et devra cesser toute utilisation des
                Services d’HOPFAB, sans préjudice du respect des obligations
                ayant vocation à perdurer à la cessation de cette utilisation.
              </li>
              <li>
                <span className="font-bold">6.3 - Résiliation</span>. HOPFAB et
                l’Intermédiaire se réservent respectivement le droit, pour
                convenance, de résilier les présentes CGU et les Documents
                Contractuels, sans préavis, sans recours aux juridictions et par
                simple courrier électronique avec accusé de réception adressé à
                HOPFAB et/ou à l’Intermédiaire. Cette résiliation n’aura effet
                qu’à l’issue des dernières transactions en cours entre les
                Acheteurs pour le compte desquels intervient l’Intermédiaire et
                les Vendeurs via les Services d’HOPFAB.
              </li>
              <li>
                <span className="font-bold">6.4 - </span>HOPFAB et
                l’Intermédiaire se réservent respectivement le droit, en cas de
                faute, de résilier les présentes CGU et les Documents
                Contractuels, sans préavis, sans recours aux juridictions et par
                simple courrier électronique avec accusé de réception adressé à
                HOPFAB et/ou à l’Intermédiaire, sans préjudice de toute demande
                de cessation de la faute et de réparation du préjudice en
                résultant. Cette résiliation aura effet immédiat, sauf accord
                contraire entre HOPFAB et l’Intermédiaire.
              </li>
              <li>
                <span className="font-bold">6.5 - </span> HOPFAB se réserve
                également le droit, en cas de faute, de supprimer et/ou de
                suspendre l’accès et l’utilisation de ses Services par
                l’Intermédiaire, de supprimer et/ou de suspendre les éléments,
                contenus ou informations mis à disposition sur ses Services par
                l’Intermédiaire, et d’annuler toute offre de vente d’un Projet
                d’un Vendeur aux Acheteurs pour le compte desquels agit
                l’Intermédiaire, sans préjudice de la possibilité de résilier
                les présentes CGU et les Documents Contractuels, dans les
                conditions susvisées.
              </li>
              <li>
                <span className="font-bold">6.6 - </span>
                Dans tous les cas, les stipulations qui devraient
                raisonnablement perdurer après la résiliation resteront en
                vigueur et, notamment mais non-exclusivement, les Articles 2.3 à
                2.6 relatifs à l’obligation de traiter et contracter avec les
                Vendeurs présentés par HOPFAB via les Services d’HOPFAB, les
                Articles 3.1 à 3.7 relatifs à l’obligation de passer commande et
                de procéder au paiement des Vendeurs présentés par HOPFAB via
                les Services d’HOPFAB, et les Articles 5.1 à 5.5 relatifs à la
                propriété intellectuelle.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mb-3">
            7 - Loi applicable et juridiction compétente (Attribution de
            juridiction)
          </h3>
          <div className="mb-4">
            <ul className="mb-2">
              <li>
                <span className="font-bold">7.1 - Loi applicable</span>. Les
                présentes CGU et les Documents Contractuels sont régies par la
                loi française.
              </li>
              <li>
                <span className="font-bold">7.2 - Juridiction compétente</span>.
                Tout litige avec un Intermédiaire n’agissant pas en tant que
                professionnel et résultant de la formation, de l'interprétation
                ou de l'exécution des présentes CGU sera porté devant les
                tribunaux compétents en vertu des règles de procédure civile
                française.
              </li>
              <li>
                <span className="font-bold">
                  7.3 - Attribution de juridiction. Tout litige avec un
                  Intermédiaire agissant à titre professionnel et résultant de
                  la formation, de l’interprétation ou de l’exécution des
                  présentes CGU sera de la compétence exclusive des tribunaux du
                  ressort de Paris, nonobstant pluralité de défendeurs ou appel
                  en garantie.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </default_layout_1.default>);
};
exports.default = MentionsLegalesPage;
