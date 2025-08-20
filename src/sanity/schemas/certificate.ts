export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'objectives',
      title: 'Learning Objectives',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.max(5),
    },
    {
      name: 'modules',
      title: 'Modules/Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Module Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Module Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'durationWeeks',
      title: 'Duration (Weeks)',
      type: 'number',
      description: 'Typical duration is 6-12 weeks',
    },
    {
      name: 'delivery',
      title: 'Delivery Method',
      type: 'string',
      options: {
        list: [
          { title: 'Online', value: 'Online' },
          { title: 'In-Person', value: 'In-Person' },
          { title: 'Hybrid', value: 'Hybrid' },
        ],
      },
    },
    {
      name: 'tuitionNote',
      title: 'Tuition Note',
      type: 'string',
      description: 'Placeholder text for tuition information',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'heroImage',
    },
    prepare(selection: any) {
      const { title, category } = selection
      return {
        title: title,
        subtitle: category ? `Category: ${category}` : 'No category',
        media: selection.media,
      }
    },
  },
}
