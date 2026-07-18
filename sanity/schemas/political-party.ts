import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'politicalParty',
  title: 'Political Party',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'acronym',
      title: 'Acronym',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nationalChairman',
      title: 'National Chairman',
      type: 'string',
      description: 'Current national chairman as verified against INEC or another official party/election source.',
    }),
    defineField({
      name: 'nationalSecretary',
      title: 'National Secretary',
      type: 'string',
      description: 'Current national secretary as verified against INEC or another official party/election source.',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Official Source URL',
      type: 'url',
      description: 'Official source used to verify this party record, such as the INEC party detail page.',
    }),
    defineField({
      name: 'lastVerified',
      title: 'Last Verified',
      type: 'date',
      description: 'Date this record was last checked against the official source.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (e.g., 1, 2, 3)',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Optional brief description or slogan of the party.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Optional party logo. If absent, the public page uses a neutral flag placeholder.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      acronym: 'acronym',
      chairman: 'nationalChairman',
      media: 'image',
    },
    prepare(selection: {title?: string; acronym?: string; chairman?: string; media?: unknown}) {
      const {title, acronym, chairman, media} = selection
      return {
        title,
        subtitle: [acronym, chairman].filter(Boolean).join(' | '),
        media,
      }
    },
  },
})
