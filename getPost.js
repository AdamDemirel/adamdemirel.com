// import { async } from "q";
import fs from "fs";
const { create } = require("md-mdast");
const toHast = require("mdast-util-to-hast");
const toHtml = require("hast-util-to-html");
const parser = create();

// getPost("test").then(data => console.log("data", data));

export default async pageName => {
  return await new Promise((res, rej) => {
    fs.readFile(__dirname + `/content/${pageName}.md`, "utf-8", (err, data) => {
      if (err) throw err;

      const mdast = parser.tokenizeBlock(data);
      // const refProperties = num => ({
      //   hName: "sup",
      //   hProperties: {
      //     id: [`fnref:${num}`],
      //     position: "relative"
      //   },
      //   hChildren: [
      //     {
      //       type: "element",
      //       tagName: "a",
      //       properties: {
      //         href: `#fn:${num}`,
      //         rel: "footnote",
      //         "data-footnote-number": num
      //       },
      //       children: [{ type: "text", value: num }]
      //     }
      //   ]
      // });

      // const footnoteProperties = (num, link) => {
      //   // num = num.replace(". ", "");
      //   // const newNum = num.match(".")[0];

      //   return {
      //     hName: "cite",
      //     hProperties: {
      //       class: "footnote",
      //       id: `fn:${num}`
      //     },
      //     hChildren: [
      //       {
      //         type: "text",
      //         value: num
      //       },
      //       {
      //         type: "element",
      //         tagName: "a",
      //         properties: {
      //           href: `#fnref:${num}`,
      //           title: "return to citation"
      //         },
      //         children: [{ type: "text", value: "↩" }]
      //       }
      //     ]
      //   };
      // };

      // mdast.children.forEach(item => {
      //   // console.log("CL: item", item);
      //   if (item.children && item.children.length !== 0) {
      //     item.children.map(child => {
      //       if (child.type === "inlineCode") {
      //         child.data = refProperties(child.value);
      //         return child;
      //       } else if (child.type === "spoiler" || child.type === "delete") {
      //         let num, link;
      //         if (child.children) {
      //           // console.log("child children", child.children[1]);
      //           const isLink = child.children[1];
      //           if (isLink) {
      //             // num = child.children[0].value;
      //             // console.log("num: " + num + ", link: " + link);
      //             console.log(child.children);
      //           }

      //           // if (child.children[1]) {
      //           //   link = child.children[1].value;
      //           // }
      //         }
      //         child.data = footnoteProperties(num, link);
      //       } else {
      //         return child;
      //       }
      //     });
      //   }
      // });

      let hast = toHast(mdast);
      console.log('CL: hast', hast);
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
