import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'houseCabinetMember',
  title: 'House Cabinet Member',
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
      description: 'e.g., Speaker, Deputy Speaker, Majority Leader',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'constituency',
      title: 'Federal Constituency',
      type: 'string',
      description: 'e.g., Surulere I, Zaria Federal Constituency',
    }),
    defineField({
      name: 'state',
      title: 'State Represented',
      type: 'reference',
      to: [{type: 'state'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'wikiUrl',
      title: 'Wikipedia URL',
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
