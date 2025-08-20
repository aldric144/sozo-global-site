export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Course Code',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'e.g., "SBM101"',
    },
    {
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'number',
    },
    {
      name: 'quarter',
      title: 'Quarter/Semester',
      type: 'number',
      validation: (Rule: any) => Rule.min(1).max(8),
      description: 'For quarter/semester grouping (1-8)',
    },
    {
      name: 'required',
      title: 'Required Course',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      code: 'code',
      title: 'title',
      quarter: 'quarter',
      required: 'required',
    },
    prepare(selection: any) {
      const { code, title, quarter, required } = selection
      return {
        title: `${code}: ${title}`,
        subtitle: `Q${quarter || '?'} • ${required ? 'Required' : 'Elective'}`,
      }
    },
  },
}
