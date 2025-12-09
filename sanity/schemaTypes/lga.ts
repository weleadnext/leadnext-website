import { defineField, defineType } from 'sanity'

export const lga = defineType({
  name: 'lga',
  title: 'Local Government Area',
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
      name: 'state',
      title: 'State',
      type: 'reference',
      to: { type: 'state' },
    }),
  ],
})

