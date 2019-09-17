import React from "react";
import getPost from "./getPost.js";

//"react-static-plugin-styled-components",
export default {
  Document: ({ Html, Head, Body, children, state: { siteData, renderMeta } }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/littlefoot/dist/littlefoot.min.js" type="application/javascript"></script>
        <script src="/littlefoot.js" type="application/javascript"></script>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: ["react-static-plugin-reach-router"],
  siteRoot: "https://adamdemirel.com",
  getRoutes: async ({ dev }) => [
    {
      path: "/",
      template: "src/pages/home"
    },
    {
      path: "skills",
      template: "src/pages/skills"
    },
    {
      path: "writing",
      template: "src/pages/writing"
      // children: posts.map(post => ({
      //   path: `post/${post.slug}`,
      //   template: 'src/containers/BlogPost',
      //   getData: async () => ({
      //     post,
      //   }),
      // })),
    },
    {
      path: "sleep",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("sleep");

        return {
          title: "Sleep",
          content: post,
          path: "sleep"
        };
      }
    },
    {
      path: "job-satisfaction",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("job-satisfaction");

        return {
          title: "Job Satisfaction",
          content: post,
          path: "job-satisfaction" // for GA
        };
      }
    }
  ]
};
