// if (typeof window !== "undefined") {
//   setTimeout(() => {
//     window.littlefoot.default({
//       activateOnHover: false,
//       hoverDelay: 250,
//       buttonTemplate: `<button
//     aria-controls="fncontent:<%= id %>"
//     aria-expanded="false"
//     aria-label="Footnote <%= number %>"
//     class="littlefoot-footnote__button"
//     id="<%= reference %>"
//     rel="footnote"
//     title="See Footnote <%= number %>"
//     />
//     <%= content.replace(/..*$/, "") %>
//     </button>`,
//       contentTemplate: `
//     <aside
// alt="Footnote <%= number %>"
// class="littlefoot-footnote is-positioned-bottom"
// id="fncontent:<%= id %>"
// >
// <div class="littlefoot-footnote__wrapper">
//   <div class="littlefoot-footnote__content">
//     <%= content %>
//   </div>
// </div>
// <div class="littlefoot-footnote__tooltip"></div>
// </aside>
// `
//     });
//   }, 5000);
// }
