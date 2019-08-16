import { async } from "q";
import showdown from "showdown";
import fs from "fs";
import { resolve } from "path";
const converter = new showdown.Converter();

const getPost = async pageName => {
  return await new Promise((res, rej) => {
    fs.readFile(__dirname + `/content/${pageName}.md`, "utf-8", (err, data) => {
      if (err) throw err;
      res(converter.makeHtml(data));
    });
  });

  // return content;
};

// getPost("test").then(data => console.log("data", data));

// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org

export default {
  siteRoot: "https://adamdemirel.com",
  getRoutes: async ({ dev }) => [
    {
      path: "/",
      template: "src/pages/home"
    },
    {
      path: "skills",
      template: "src/pages/skills"
      // getData: async () => ({
      //   huh: "getdata return value"
      // })
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
          content: post
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
          content: post
        };
      }
    }
  ],
  plugins: ["react-static-plugin-styled-components", "babel-plugin-styled-components", "react-static-plugin-reach-router"]
};
