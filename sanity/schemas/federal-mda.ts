import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'federalMda',
  title: 'Federal MDA',
  type: 'document',
  fields: [
    defineField({
      name: 'agencyName',
      title: 'Agency Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'acronym',
      title: 'Acronym',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'headName',
      title: 'Head of Agency',
      type: 'string',
    }),
    defineField({
      name: 'headTitle',
      title: 'Title of Head',
      type: 'string',
      description: 'e.g., Director General, Executive Secretary',
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          'Economy', 'Education', 'Health', 'Infrastructure', 'Security', 'Social Development', 'Agriculture', 'Technology', 'Other'
        ]
      }
    }),
    defineField({
      name: 'supervisingMinistry',
      title: 'Supervising Ministry',
      type: 'string',
    }),
    defineField({
      name: 'stateOfOrigin',
      title: 'State of Origin (Head)',
      type: 'string',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'Agency Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'agencyName',
      subtitle: 'headName',
      media: 'logo',
    },
  },
})
