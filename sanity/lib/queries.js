export const allPostsQuery = `
  *[_type == "post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
  }
`;

export const singlePostQuery = (slug) => `
  *[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    body
  }
`;
