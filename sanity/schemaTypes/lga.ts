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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'reference',
      to: { type: 'state' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'zone',
      title: 'Zone / Senatorial District',
      type: 'string',
      description: 'e.g., Central, North, South',
    }),
    defineField({
      name: 'chairman',
      title: 'Chairman',
      type: 'reference',
      to: [{ type: 'official' }],
      description: 'Reference to the Official serving as Chairman',
    }),
    defineField({
      name: 'logo',
      title: 'LGA Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Basic information about the Local Government',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'state.name',
      media: 'logo',
    },
  },
})
