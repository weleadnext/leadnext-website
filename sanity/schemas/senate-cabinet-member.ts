import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'senateCabinetMember',
  title: 'Senate Cabinet Member',
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
      description: 'e.g., Senate President, Deputy Senate President, Majority Leader',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'senatorialZone',
      title: 'Senatorial Zone',
      type: 'string',
      description: 'e.g., Kaduna Central, Lagos East',
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
