export default {
  title: "Image",
  name: "objectImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alt Text",
      name: "alt",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: "alt",
      media: "asset",
    },
  },
}
