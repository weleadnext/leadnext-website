import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'federalProject',
  title: 'Federal Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Roads and Bridges', value: 'Roads and Bridges' },
          { title: 'Rail', value: 'Rail' },
          { title: 'Power', value: 'Power' },
          { title: 'Health', value: 'Health' },
          { title: 'Education', value: 'Education' },
          { title: 'Water', value: 'Water' },
          { title: 'Housing', value: 'Housing' },
          { title: 'Digital Infrastructure', value: 'Digital Infrastructure' },
          { title: 'Other', value: 'Other' },
        ],
      },
      initialValue: 'Other',
    }),
    defineField({
      name: 'implementingAgency',
      title: 'Implementing Agency',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'State, region, corridor, or communities affected.',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Announced', value: 'announced' },
          { title: 'Approved', value: 'approved' },
          { title: 'Awarded', value: 'awarded' },
          { title: 'Flagged Off', value: 'flagged_off' },
          { title: 'Ongoing', value: 'ongoing' },
          { title: 'Delayed', value: 'delayed' },
          { title: 'Completed', value: 'completed' },
          { title: 'Commissioned', value: 'commissioned' },
          { title: 'Needs Verification', value: 'needs_verification' },
        ],
      },
      initialValue: 'needs_verification',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cost',
      title: 'Cost',
      type: 'number',
      description: 'Numeric cost in naira where extractable.',
    }),
    defineField({
      name: 'costText',
      title: 'Cost Text',
      type: 'string',
      description: 'Original cost wording from the source, e.g. N111bn.',
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      description: 'Plain-language timeline, delivery period, or completion target.',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'expectedCompletionDate',
      title: 'Expected Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sourceName',
      title: 'Source Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'Official Government Website', value: 'Official Government Website' },
          { title: 'Trusted News Outlet', value: 'Trusted News Outlet' },
          { title: 'Other Verified Source', value: 'Other Verified Source' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
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
      name: 'timelineEvents',
      title: 'Timeline Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'eventDate',
              title: 'Event Date',
              type: 'date',
            }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
            }),
            defineField({
              name: 'title',
              title: 'Event Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'summary',
              title: 'Event Summary',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'sourceName',
              title: 'Source Name',
              type: 'string',
            }),
            defineField({
              name: 'sourceUrl',
              title: 'Source URL',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              status: 'status',
              eventDate: 'eventDate',
            },
            prepare({ title, status, eventDate }) {
              return {
                title,
                subtitle: [eventDate, status].filter(Boolean).join(' - '),
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      sector: 'sector',
    },
    prepare({ title, status, sector }) {
      return {
        title,
        subtitle: [sector, status].filter(Boolean).join(' - '),
      }
    },
  },
})
