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
      name: 'curriculum',
      title: 'Curriculum Modules',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Module Title'},
          {name: 'description', type: 'text', title: 'Module Description'},
          {name: 'icon', type: 'string', title: 'Icon Name', options: {list: ['Users', 'CheckCircle2', 'Mic', 'BookOpen', 'Lightbulb', 'Leaf']}},
        ]
      }]
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'quote', type: 'text', title: 'Quote'},
          {name: 'author', type: 'string', title: 'Author'},
          {name: 'role', type: 'string', title: 'Role/Cohort'},
        ]
      }]
    }),
    defineField({
      name: 'stats',
      title: 'Impact Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'value', type: 'string', title: 'Value (e.g., 750+)'},
          {name: 'label', type: 'string', title: 'Label (e.g., Graduates)'},
        ]
      }]
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'question', type: 'string', title: 'Question'},
          {name: 'answer', type: 'text', title: 'Answer'},
        ]
      }]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})

