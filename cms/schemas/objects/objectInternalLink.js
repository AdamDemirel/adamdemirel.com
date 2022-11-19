export default {
  title: "Document",
  name: "objectInternalLink",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Document",
      name: "document",
      type: "reference",
      to: [
        { type: "documentArticle" },
      ],
      weak: true,
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
}
