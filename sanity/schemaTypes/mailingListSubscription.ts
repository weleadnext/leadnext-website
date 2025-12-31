import { defineField, defineType } from 'sanity'

export const mailingListSubscription = defineType({
  name: 'mailingListSubscription',
  title: 'Mailing List Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'Unsubscribed', value: 'unsubscribed'},
        ],
        layout: 'radio'
      },
      initialValue: 'active'
    }),
  ],
  preview: {
    select: {
      email: 'email',
      subscribedAt: 'subscribedAt',
      status: 'status',
    },
    prepare({ email, subscribedAt, status }) {
      return {
        title: email,
        subtitle: `${status} - ${new Date(subscribedAt).toLocaleDateString()}`,
      }
    },
  },
})

