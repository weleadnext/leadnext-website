import { defineField, defineType } from 'sanity'

export const cohort = defineType({
  name: 'cohort',
  title: 'Cohort',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Cohort Name',
      type: 'string',
      description: 'e.g., "Cohort 1 2026", "Cohort 2 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Inactive', value: 'inactive'},
          {title: 'Completed', value: 'completed'},
        ],
        layout: 'radio'
      },
      initialValue: 'inactive',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Application Start Date',
      type: 'datetime',
      description: 'When applications open for this cohort',
    }),
    defineField({
      name: 'endDate',
      title: 'Application End Date',
      type: 'datetime',
      description: 'When applications close for this cohort',
    }),
    defineField({
      name: 'programStartDate',
      title: 'Program Start Date',
      type: 'datetime',
      description: 'When the actual program/cohort begins',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description of this cohort',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      status: 'status',
      startDate: 'startDate',
    },
    prepare({ name, status, startDate }) {
      const formattedDate = startDate 
        ? new Date(startDate).toLocaleDateString() 
        : 'No start date';
      
      return {
        title: name,
        subtitle: `${status.charAt(0).toUpperCase() + status.slice(1)} - Opens: ${formattedDate}`,
        media: status === 'active' ? '🟢' : status === 'completed' ? '✅' : '⚪',
      }
    },
  },
  orderings: [
    {
      title: 'Status (Active first)',
      name: 'statusDesc',
      by: [
        {field: 'status', direction: 'desc'},
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}]
    },
    {
      title: 'Start Date, Newest',
      name: 'startDateDesc',
      by: [{field: 'startDate', direction: 'desc'}]
    }
  ],
})