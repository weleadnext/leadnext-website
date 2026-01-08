import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'securityHead',
  title: 'Security Head',
  type: 'document',
  fields: [
    defineField({
      name: 'agency',
      title: 'Agency/Institution',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'incumbent',
      title: 'Incumbent Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicProfileUrl',
      title: 'Public Profile URL',
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
      title: 'incumbent',
      subtitle: 'position',
      media: 'image',
    },
  },
})
