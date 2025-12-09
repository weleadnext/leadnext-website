import { defineField, defineType } from 'sanity'

export const zone = defineType({
  name: 'zone',
  title: 'Geopolitical Zone',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        list: [
          'North Central',
          'North East',
          'North West',
          'South East',
          'South South',
          'South West',
        ]
      }
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
  ],
})

