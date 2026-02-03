import { defineField, defineType } from 'sanity'

export const program = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Program Title',
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
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'A brief summary for cards and previews (approx 20-30 words).',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Program Overview',
      type: 'array',
      of: [{type: 'block'}], 
      description: 'Detailed "About the Program" text.'
    }),
    defineField({
      name: 'whatItOffers',
      title: 'What the Program Offers',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of benefits or offerings (e.g., "Interactive learning on governance")'
    }),
    defineField({
      name: 'programStructure',
      title: 'Program Structure',
      type: 'object',
      fields: [
        {name: 'duration', type: 'string', title: 'Duration'},
        {name: 'cohortSize', type: 'string', title: 'Cohort Size'},
        {name: 'deliveryMode', type: 'string', title: 'Delivery Mode'},
        {name: 'language', type: 'string', title: 'Language'},
      ]
    }),
    defineField({
      name: 'eligibilityCriteria',
      title: 'Eligibility Criteria',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of eligibility requirements'
    }),
    defineField({
      name: 'applyText',
      title: 'Apply Section Text',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Text for the application section'
    }),
    defineField({
      name: 'applicationsOpen',
      title: 'Applications Open',
      type: 'boolean',
      description: 'Enable or disable applications for this program',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this program appears (lower numbers first)',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      applicationsOpen: 'applicationsOpen',
      media: 'mainImage',
    },
    prepare({ title, applicationsOpen, media }) {
      return {
        title,
        subtitle: applicationsOpen ? '✅ Applications Open' : '❌ Applications Closed',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'title', direction: 'asc'}
      ]
    },
    {
      title: 'Application Status',
      name: 'applicationsOpenDesc',
      by: [
        {field: 'applicationsOpen', direction: 'desc'},
        {field: 'title', direction: 'asc'}
      ]
    }
  ],
})

