const fs = require('fs');
const { create } = require('md-mdast');
const toHast = require('mdast-util-to-hast');
// const unified = require('unified');
const toHtml = require('hast-util-to-html');

const parser = create();
let html;

fs.readFile('./content/job-satisfaction.md', 'utf-8', (err, data) => {
    const mdast = parser.tokenizeBlock(data);
    let hast = toHast(mdast);
    let num = 0;
    
//     console.log(typeof hast)
    hast.children.map(el => {
            if (el.tagName === "h1") {
                el.properties.id = `section-${num}`
                num += 1;
                return el;
            }
            
            return el;
    }
    );
    
    
    console.log(toHtml(hast));
})

console.log(html);
