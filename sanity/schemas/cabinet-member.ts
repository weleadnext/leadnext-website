import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cabinetMember',
  title: 'Cabinet Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'wikiUrl',
      title: 'Wikipedia URL',
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
      title: 'name',
      subtitle: 'portfolio',
      media: 'image',
    },
  },
})
