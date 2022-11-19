export default {
  title: "Content",
  name: "objectContent",
  type: "array",
  of: [
    {
      title: "Content",
      type: "block",
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        annotations: [
          {
            title: "External Link",
            name: "externalLink",
            type: "object",
            fields: [
              {
                title: "External Link",
                name: "link",
                type: "objectExternalLink",
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            fields: [
              {
                title: "Internal Document",
                name: "document",
                type: "objectInternalLink",
              },
            ],
          },
        ],
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Underline", value: "underline" },
        ],
      },
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Small", value: "small" },
      ],
    },
    {
      title: "Image",
      type: "objectImage",
    },
  ],
}
