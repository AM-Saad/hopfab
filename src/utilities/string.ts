/**
 * Get uri from full path.
 * @param fullPath The full path to extract the uri from.
 * @param domain The domain part of the full path.
 */
const getUriFromFullPath = (fullPath: string | null, domain: string) => {
  if (!fullPath) {
    return "";
  }

  return fullPath.replace(`https://hopfab.com/${domain}/`, "");
};

const buildUriPage = (
  basePath: string,
  pageIndex: number,
  categoryName: string,
  category?: string
) => {
  let sanitizedCategory = category;

  if (sanitizedCategory && sanitizedCategory.startsWith("/"))
    sanitizedCategory = sanitizedCategory.substring(1);

  if (sanitizedCategory && sanitizedCategory.endsWith("/"))
    sanitizedCategory = sanitizedCategory.substring(
      0,
      sanitizedCategory.length - 1
    );

  return `/${basePath}${
    sanitizedCategory
      ? `${categoryName ? `/${sanitizedCategory}` : ""}/${sanitizedCategory}`
      : ""
  }${pageIndex > 1 ? `/${pageIndex}` : ""}`;
};

export { getUriFromFullPath, buildUriPage };
