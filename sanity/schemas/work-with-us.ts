import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'workWithUs',
  title: 'Work With Us Request',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'interest',
      title: 'Area of Interest',
      type: 'string',
      options: {
        list: [
          { title: 'Volunteer', value: 'Volunteer' },
          { title: 'Become a Mentor', value: 'Mentor' },
          { title: 'Become a Partner', value: 'Partner' },
          { title: 'Careers & Internships', value: 'Career' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description / Reason',
      type: 'text',
      rows: 4,
      description: 'Why do you want to work with us?',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'New' },
          { title: 'Contacted', value: 'Contacted' },
          { title: 'Closed', value: 'Closed' },
        ],
      },
      initialValue: 'New',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'interest',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: `Interest: ${subtitle}`,
      }
    },
  },
})
