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
      name: 'wikiUrl',
      title: 'Wikipedia URL',
      type: 'url',
    }),
    defineField({
      name: 'stateOfOrigin',
      title: 'State of Origin',
      type: 'string',
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
