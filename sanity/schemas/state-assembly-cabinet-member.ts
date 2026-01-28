import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'stateAssemblyCabinetMember',
  title: 'State Assembly Cabinet Member',
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
      title: 'Portfolio/Role',
      type: 'string',
      description: 'e.g., Speaker, Deputy Speaker',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'constituency',
      title: 'State Constituency',
      type: 'string',
      description: 'e.g., Sabon Gari, Alimosho I',
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
