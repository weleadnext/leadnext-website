import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'securityHead',
  title: 'Security Agency Head',
  type: 'document',
  fields: [
    defineField({
      name: 'agency',
      title: 'Agency Name',
      type: 'string',
      description: 'e.g., Nigerian Army, DSS',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'position',
      title: 'Position Title',
      type: 'string',
      description: 'e.g., Chief of Army Staff, Director General',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'incumbent',
      title: 'Current Incumbent',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicProfileUrl',
      title: 'Public Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'stateOfOrigin',
      title: 'State of Origin',
      type: 'reference',
      to: [{type: 'state'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'incumbent',
      subtitle: 'position',
      media: 'image',
    },
  },
})
