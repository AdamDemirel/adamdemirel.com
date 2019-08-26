import { async } from "q";
// import showdown from "showdown";
import fs from "fs";
const { create } = require("md-mdast");
const toHast = require("mdast-util-to-hast");
const toHtml = require("hast-util-to-html");
// const converter = new showdown.Converter();

const parser = create();

const getPost = async pageName => {
  return await new Promise((res, rej) => {
    fs.readFile(__dirname + `/content/${pageName}.md`, "utf-8", (err, data) => {
      if (err) throw err;

      const mdast = parser.tokenizeBlock(data);
      let hast = toHast(mdast);
      let num = 0;

      //     console.log(typeof hast)
      hast.children.map(el => {
        if (el.tagName === "h1" || el.tagName === "h2" || el.tagName === "h3" || el.tagName === "h4" || el.tagName === "h5" || el.tagName === "h6") {
          el.properties.id = `section-${num}`;
          num += 1;
          return el;
        }

        return el;
      });

      res(toHtml(hast));

      // res(converter.makeHtml(data));
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
  plugins: ["react-static-plugin-styled-components", "react-static-plugin-reach-router"],
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
        // console.log("CL: post", post);

        return {
          title: "Job Satisfaction",
          content: post
        };
      }
    }
  ],

};
