import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'federalBudget',
  title: 'Federal Budget',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Fiscal Year',
      type: 'string',
      description: 'e.g., 2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Budget Title',
      type: 'string',
      description: 'e.g., Budget of Economic Consolidation',
    }),
    defineField({
      name: 'totalAmount',
      title: 'Total Budget Amount (Trillion Naira)',
      type: 'number',
      description: 'The official total budget figure (e.g., 47.9)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Proposed', value: 'Proposed' },
          { title: 'Passed by NASS', value: 'Passed' },
          { title: 'Signed into Law', value: 'Signed' },
        ],
      },
    }),
    defineField({
      name: 'allocations',
      title: 'Budget Allocations / Line Items',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Allocation',
          fields: [
            defineField({
              name: 'sector',
              title: 'Sector / Category',
              type: 'string',
              description: 'e.g., National Security, Education',
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
              name: 'allocation',
              title: 'Allocation (Trillion Naira)',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
              name: 'percentage',
              title: '% of Total Budget',
              type: 'number',
              description: 'e.g., 9.30',
              validation: (Rule) => Rule.required().min(0).max(100),
            }),
            defineField({
              name: 'notes',
              title: 'Notes / Breakdown',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'sector',
              subtitle: 'allocation',
              media: 'budgetType',
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: `₦${subtitle} Trillion`,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'totalAmount',
    },
    prepare({ title, subtitle }) {
      return {
        title: `${title} Budget`,
        subtitle: `Total: ₦${subtitle} Trillion`,
      }
    },
  },
})
