import { defineField, defineType } from 'sanity'

export const state = defineType({
  name: 'state',
  title: 'State',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'zone',
      title: 'Zone',
      type: 'reference',
      to: { type: 'zone' },
    }),
  ],
})

