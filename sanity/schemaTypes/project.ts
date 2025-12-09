import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Planned', value: 'planned'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
          {title: 'On Hold', value: 'on_hold'},
        ],
      }
    }),
    defineField({
      name: 'budget',
      title: 'Budget (NGN)',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}]
    }),
    defineField({
      name: 'official',
      title: 'Responsible Official',
      type: 'reference',
      to: {type: 'official'},
    }),
    defineField({
      name: 'state',
      title: 'State Location',
      type: 'reference',
      to: {type: 'state'},
    }),
    defineField({
      name: 'lga',
      title: 'LGA Location',
      type: 'reference',
      to: {type: 'lga'},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'mainImage',
    },
  },
})

