export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short preview text for summaries or cards.',
    },
        {
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'Content',
    },
    // {
    //   name: 'content',
    //   title: 'Content',
    //   type: 'array',
    //   of: [{ type: 'block' }, { type: 'image' }, { type: 'text'} ], 
    //   validation: (Rule) => Rule.required(),
    // },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
};
