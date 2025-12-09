import { defineField, defineType } from 'sanity'

export const official = defineType({
  name: 'official',
  title: 'Government Official',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
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
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g., Governor, Senator, Councilor',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array', 
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'level',
      title: 'Government Level',
      type: 'string',
      options: {
        list: [
          {title: 'Federal', value: 'federal'},
          {title: 'State', value: 'state'},
          {title: 'Local', value: 'local'},
        ],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'reference',
      to: {type: 'state'},
      hidden: ({document}) => document?.level === 'federal',
    }),
    defineField({
      name: 'lga',
      title: 'LGA',
      type: 'reference',
      to: {type: 'lga'},
      hidden: ({document}) => document?.level !== 'local',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
})

