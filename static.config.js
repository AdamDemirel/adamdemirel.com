import React from "react"
import getPost from "./getPost.js"

// TO CONVERT. used previously by react static

export default {
  siteRoot: "https://adamdemirel.com",
  getRoutes: async ({ dev }) => [
    {
      path: "writing",
      template: "src/pages/writing"
    },
    {
      path: "sleep",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("sleep")

        return {
          title: "Sleep.",
          content: post,
          path: "sleep"
        }
      }
    },
    {
      path: "job-satisfaction",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("job-satisfaction")

        return {
          title: "Job Satisfaction.",
          content: post,
          path: "job-satisfaction"
        }
      }
    },
    {
      path: "happiness",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("happiness")

        return {
          title: "Happiness.",
          content: post,
          path: "happiness"
        }
      }
    },
    {
      path: "property",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("property")

        return {
          title: "Things I recommend you buy and use.",
          content: post,
          path: "property",
        }
      }
    },
  ]
}
