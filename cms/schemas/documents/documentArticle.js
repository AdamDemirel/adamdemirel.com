export default {
  name: 'documentArticle',
  type: 'document',
	title: 'Articles',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'handle',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        maxLength: 96,
        source: "title",
      },
    },
    {
      name: 'content',
      title: 'content',
      type: 'objectContent'
    },
  ]
}
