// import { async } from "q";
import fs from "fs";
const { create } = require("md-mdast");
const toHast = require("mdast-util-to-hast");
const toHtml = require("hast-util-to-html");
const parser = create();

// getPost("test").then(data => console.log("data", data));

export default async function getPost(pageName) {
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
}
