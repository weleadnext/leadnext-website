import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'federalBudget',
  title: 'Federal Budget',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Budget Year',
      type: 'string',
      description: 'e.g., 2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'budgetType',
      title: 'Budget Type',
      type: 'string',
      options: {
        list: [
          { title: 'Functional', value: 'Functional' },
          { title: 'Economic', value: 'Economic' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sector',
      title: 'Sector / Category',
      type: 'string',
      description: 'e.g., National Security, Education, Recurrent Expenditure',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'allocation',
      title: 'Allocation (Trillion Naira)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'percentage',
      title: '% of Total Budget',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: 'notes',
      title: 'Notes / Breakdown',
      type: 'text',
      rows: 3,
      description: 'Additional details about this allocation.',
    }),
  ],
  preview: {
    select: {
      title: 'sector',
      subtitle: 'year',
      media: 'budgetType',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title,
        subtitle: `${subtitle} (${media})`,
      }
    }
  },
})
