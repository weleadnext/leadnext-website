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
    defineField({
      name: 'governorName',
      title: 'Governor Name',
      type: 'string',
      description: 'Current elected governor as verified against the Nigeria Governors Forum or official state source.',
    }),
    defineField({
      name: 'governorSourceUrl',
      title: 'Governor Official Source URL',
      type: 'url',
      description: 'Official source used to verify the current governor.',
    }),
    defineField({
      name: 'governorLastVerified',
      title: 'Governor Last Verified',
      type: 'date',
      description: 'Date the governor record was last checked against the official source.',
    }),
    defineField({
      name: 'logo',
      title: 'State Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})

