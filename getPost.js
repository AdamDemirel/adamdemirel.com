const fs = require("fs");
const { create } = require("md-mdast");
const toHast = require("mdast-util-to-hast");
const toHtml = require("hast-util-to-html");
const parser = create();

export default async pageName => {
  return await new Promise((res, rej) => {
    fs.readFile(__dirname + `/content/${pageName}.md`, "utf-8", (err, data) => {
      if (err) throw err;

      const mdast = parser.tokenizeBlock(data);
      const hast = toHast(mdast);
      let num = 0;

      hast.children.map(el => {
        const { tagName, properties } = el;
        const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

        if (headings.includes(tagName)) {
          properties.id = `section-${num}`;
          num += 1;
          return el;
        }

        return el;
      });

      res(toHtml(hast));
    });
  });
};
