export default {
  name: 'form',
  type: 'document',
	title: 'Form submissions',
  fields: [
    {
      name: 'content',
      type: 'text',
      title: 'content',
      validation: Rule => Rule.required()
    },
    {
      name: 'formType',
      type: 'string',
      title: 'Form submission type',
      validation: Rule => Rule.required()
    }
  ]
}
