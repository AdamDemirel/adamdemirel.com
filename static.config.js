import { async } from "q";

// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at httsp://react-static.js.org

export default {
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
    }
  ],
  plugins: ["react-static-plugin-styled-components", "react-static-plugin-reach-router"]
};
