export default {
  title: "Link",
  name: "objectExternalLink",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      validation: Rule =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel", "#"],
        }),
    },
    {
      title: "New window",
      name: "external",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
}
