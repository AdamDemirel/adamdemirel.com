const theme = {
  colors: {
    black: "hsl(0, 0%, 0%)",
    white: "hsl(0, 0%, 100%)",
    lightGray: "hsl(0, 0%, 95%)",
    mediumGray: "hsl(13, 22%, 92%)",
    mediumDarkGray: "hsl(9, 24%, 94%)",
    darkGray: "hsl(214, 11%, 88%)", //#DDE0E4
    darkBlue: "#191545",
    darkestBlue: "hsl(230, 68%, 18%)",
    brightBlue: "hsl(186, 87%, 54%)",
    lightBrightBlue: "hsl(183, 80%, 65%)", // partnerships readmore button
    red: "hsl(3, 100%, 61%)"
  },
  borders: {
    thinWhite: "1px solid hsl(0, 0%, 100%)", // vertical lines homepage about
    thickWhite: "2px solid hsl(0, 0%, 100%)",
    darkBlue: "2px solid hsl(219, 100%, 18%)",
    darkestBlue: "2px solid hsl(230, 68%, 18%)", // contact pg
    thinBrightBlue: "2px solid hsl(186, 87%, 54%)", // back to projects announcements article
    red: "3px solid hsl(3, 100%, 61%)",
    lightGray: "1px solid hsl(0, 0%, 95%)",
    brightBlue: "2px solid hsl(186, 87%, 54%)" // view as pdf article
  },
  fontWeights: [400, 700, 900],
  lineHeights: {
    0: "16px",
    1: "22px",
    2: "26px",
    3: "30px",
    4: "32px",
    5: "38px", // article  related announcements
    6: "40px", // article quote
    7: "46px", // home sub
    8: "66px", // partnership name
    9: "81px",
    10: "88px" // home hero
  },
  letterSpacings: {
    0: "0px",
    1: "0.72px", // contact h2
    2: "0.76px", // 404 h1
    3: "0.8px", // navbar
    4: "0.82px", //home hero
    5: "1.12px", // expanded about director card name
    6: "1.28px", // article quote
    7: "1.6px", // home hero sub
    8: "2px", // rotated text
    9: "2.4px", // juidth nielson patron
    10: "3px"
  },
  space: {
    0: "0",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "18px",
    6: "24px",
    7: "32px",
    8: "48px",
    9: "64px",
    10: "96px",
    11: "128px",
    12: "192px",
    13: "256px",
    14: "384px",
    15: "512px",
    16: "640px"
  },
  fontSizes: {
    0: "12px",
    1: "14px",
    2: "15px",
    3: "16px",
    4: "18px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    11: "44px",
    12: "50px",
    13: "60px",
    14: "76px",
    15: "82px"
  },
  sizes: {},
  breakpoints: ["600px", "960px", "1280px", "1640px"],
  mediaQueries: {
    sm: "@media (max-width: 600px)",
    md: "@media (min-width: 601px) and (max-width: 960px)",
    lg: "@media (min-width: 961px)"
  },
  fonts: {
    karla: "Karla, sans-serif"
  }
};

export default theme;
