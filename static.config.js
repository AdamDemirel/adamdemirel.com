import { async } from "q";
import fs from "fs";
const { create } = require("md-mdast");
const toHast = require("mdast-util-to-hast");
const toHtml = require("hast-util-to-html");
const React = require("react");

const parser = create();

const getPost = async pageName => {
  return await new Promise((res, rej) => {
    fs.readFile(__dirname + `/content/${pageName}.md`, "utf-8", (err, data) => {
      if (err) throw err;

      const mdast = parser.tokenizeBlock(data);
      const refProperties = num => ({
        hName: "sup",
        hProperties: {
          id: [`fnref:${num}`],
          position: "relative"
        },
        hChildren: [
          {
            type: "element",
            tagName: "a",
            properties: {
              href: `#fn:${num}`,
              rel: "footnote",
              "data-footnote-number": num
            },
            children: [{ type: "text", value: num }]
            // children: [
            //   {
            //     type: "text",
            //     value: "supa"
            //   }
            // ]
          }
        ]
      });

      const footnoteProperties = (num, link) => {
        num = num.replace(". ", "");

        return {
          hName: "cite",
          hProperties: {
            class: "footnote",
            id: `fn:${num}`
          },
          hChildren: [
            {
              type: "text",
              value: `${num}. ${link} `
            },
            {
              type: "element",
              tagName: "a",
              properties: {
                href: `#fnref:${num}`,
                title: "return to citation"
              },
              children: [{ type: "text", value: "↩" }]
            }
          ]
        };
      };

      mdast.children.forEach(item => {
        // console.log("CL: item", item);
        if (item.children && item.children.length !== 0) {
          item.children.map(child => {
            if (child.type === "inlineCode") {
              child.data = refProperties(child.value);
              return child;
            } else if (child.type === "spoiler" || child.type === "delete") {
              let num, link;
              if (child.children) {
                num = child.children[0].value;
                link = child.children[1].value;
              }
              child.data = footnoteProperties(num, link);
            } else {
              return child;
            }
          });
        }
      });

      let hast = toHast(mdast);
      let num = 0;

      hast.children.map(el => {
        // console.log("el", el.children);
        if (el.tagName === "h1" || el.tagName === "h2" || el.tagName === "h3" || el.tagName === "h4" || el.tagName === "h5" || el.tagName === "h6") {
          el.properties.id = `section-${num}`;
          num += 1;
          return el;
        }

        return el;
      });

      res(toHtml(hast));
    });
  });
};

// getPost("test").then(data => console.log("data", data));

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
  ]
};
