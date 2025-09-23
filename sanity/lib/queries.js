export const allPostsQuery = `*[_type == "post"] | order(_createdAt desc){
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  content,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  "authorName": author->name,
  "authorImage": author->image
}`;
export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  content,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  },
  "authorName": author->name,
  "authorImage": author->image
}`;
