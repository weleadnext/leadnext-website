import { defineField, defineType } from 'sanity'

export const application = defineType({
  name: 'application',
  title: 'Application',
  type: 'document',
  fields: [
    defineField({
      name: 'program',
      title: 'Program',
      type: 'reference',
      to: { type: 'program' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cohort',
      title: 'Cohort',
      type: 'reference',
      to: { type: 'cohort' },
      description: 'Automatically assigned to active cohort when application is submitted',
    }),
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Required. Any format accepted.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverLetter',
      title: 'Cover Letter',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(50).max(1000),
    }),
    defineField({
      name: 'resume',
      title: 'Resume',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx'
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Under Review', value: 'under_review'},
          {title: 'Accepted', value: 'accepted'},
          {title: 'Rejected', value: 'rejected'},
        ],
        layout: 'radio'
      },
      initialValue: 'pending'
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      program: 'program.title',
      cohort: 'cohort.name',
      status: 'status',
    },
    prepare({ firstName, lastName, program, cohort, status }) {
      return {
        title: `${firstName} ${lastName}`,
        subtitle: `${program || 'No Program'} - ${cohort || 'No Cohort'} - ${status || 'pending'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Submission Date, Newest',
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}]
    },
    {
      title: 'Program',
      name: 'programAsc',
      by: [{field: 'program.title', direction: 'asc'}]
    }
  ],
})

