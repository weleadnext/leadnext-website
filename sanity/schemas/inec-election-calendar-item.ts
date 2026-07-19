import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'inecElectionCalendarItem',
  title: 'INEC Election Calendar Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Election Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'electionDate',
      title: 'Election Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Watch', value: 'watch' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'scope',
      title: 'Scope',
      type: 'string',
      description: 'Federal, state, local government, bye-election, etc.',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      description: 'State or territory affected, where applicable.',
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Official Source URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastVerified',
      title: 'Last Verified',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publicNote',
      title: 'Public Note',
      type: 'text',
      rows: 3,
      description: 'Short voter-facing note for context or follow-up.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'electionDate',
      status: 'status',
    },
    prepare({ title, date, status }) {
      return {
        title,
        subtitle: [date, status].filter(Boolean).join(' - '),
      }
    },
  },
})
