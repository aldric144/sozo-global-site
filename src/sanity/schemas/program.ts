export default {
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g., "Diploma in Supernatural Biblical Ministry"',
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
      description: 'e.g., diploma, masters, doctoral, chaplaincy',
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Diploma', value: 'Diploma' },
          { title: "Master's", value: "Master's" },
          { title: 'Doctoral', value: 'Doctoral' },
          { title: 'Chaplaincy', value: 'Chaplaincy' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich intro content',
    },
    {
      name: 'outcomes',
      title: 'Intended Outcomes',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.max(8),
      description: '4-8 bullet point outcomes',
    },
    {
      name: 'admissionRequirements',
      title: 'Admission Requirements',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Narrative or list format',
    },
    {
      name: 'curriculumNote',
      title: 'Curriculum Note',
      type: 'string',
      description: 'e.g., "13-week semesters"',
    },
    {
      name: 'programLength',
      title: 'Program Length',
      type: 'string',
      description: 'e.g., "2 years", "4 quarters"',
    },
    {
      name: 'totalCredits',
      title: 'Total Credits',
      type: 'number',
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
    {
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'course' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      level: 'level',
      media: 'heroImage',
    },
    prepare(selection: any) {
      const { title, level } = selection
      return {
        title: title,
        subtitle: level ? `Level: ${level}` : 'No level set',
        media: selection.media,
      }
    },
  },
}
