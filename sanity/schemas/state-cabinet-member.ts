import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stateCabinetMember',
  title: 'State Cabinet Member',
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
      description: 'e.g., Commissioner for Health, Special Adviser on Education',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'reference',
      to: [{type: 'state'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'wikiUrl',
      title: 'Wikipedia/Bio URL',
      type: 'url',
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
