import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'federalMda',
  title: 'Federal MDA',
  type: 'document',
  fields: [
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'supervisingMinistry',
      title: 'Supervising Ministry',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'agencyName',
      title: 'Agency Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'acronym',
      title: 'Acronym',
      type: 'string',
    }),
    defineField({
      name: 'headName',
      title: 'Head Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headTitle',
      title: 'Head Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stateOfOrigin',
      title: 'State of Origin',
      type: 'reference',
      to: [{type: 'state'}],
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
    }),
    defineField({
      name: 'logo',
      title: 'MDA Logo',
      type: 'image',
      validation: (Rule) => Rule.required().error('MDA Logo is mandatory'),
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'agencyName',
      subtitle: 'headName',
      media: 'logo',
    },
  },
})
