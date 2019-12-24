import React from "react";
import getPost from "./getPost.js";

export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta }
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="/fonts/karla-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>
        <link
          rel="preload"
          href="/fonts/karla-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    "react-static-plugin-styled-components",
    "react-static-plugin-reach-router"
  ],
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
    },
    {
      path: "happiness",
      template: "src/pages/post.js",
      getData: async () => {
        const post = await getPost("happiness");

        return {
          title: "Happiness",
          content: post,
          path: "happiness"
        };
      }
    }
  ]
};
