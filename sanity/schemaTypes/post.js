export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    {
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "publishedAt", type: "datetime" },
    { name: "mainImage", type: "image", options: { hotspot: true } },
    { name: "excerpt", type: "text" },
    { name: "body", type: "array", of: [{ type: "block" }] },
  ],
};
