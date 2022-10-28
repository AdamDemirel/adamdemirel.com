import {
  color as styledSystemColor,
  fontSize as styledFontSize,
  fontFamily as styledFontFamily,
  height as styledHeight,
  space as styledSpace,
  fontWeight as styledFontWeight,
  borderTop as styledBorderTop,
  gridGap as styledGridGap,
  borderLeft as styledBorderLeft,
  top as styledTop,
  bottom as styledBottom,
  left as styledLeft,
  width as styledWidth,
  borderBottom as styledBorderBottom,
  right as styledRight,
  display as styledDisplay,
  position as styledPosition,
  border as styledBorder,
  letterSpacing as styledLetterSpacing,
  lineHeight as styledLineHeight,
  maxWidth as styledMaxWidth,
  maxHeight as styledMaxHeight,
  minHeight as styledMinHeight
} from "styled-system"

function color(props) {
  return ({ theme }) => styledSystemColor({ theme, ...props })
}

function fontSize(props) {
  return ({ theme }) => styledFontSize({ theme, ...props })
}

function fontFamily(props) {
  return ({ theme }) => styledFontFamily({ theme, ...props })
}

function height(props) {
  return ({ theme }) => styledHeight({ theme, ...props })
}

function space(props) {
  return ({ theme }) => styledSpace({ theme, ...props })
}

function fontWeight(props) {
  return ({ theme }) => styledFontWeight({ theme, ...props })
}

function borderTop(props) {
  return ({ theme }) => styledBorderTop({ theme, ...props })
}

function gridGap(props) {
  return ({ theme }) => styledGridGap({ theme, ...props })
}

function borderLeft(props) {
  return ({ theme }) => styledBorderLeft({ theme, ...props })
}

function top(props) {
  return ({ theme }) => styledTop({ theme, ...props })
}

function bottom(props) {
  return ({ theme }) => styledBottom({ theme, ...props })
}

function left(props) {
  return ({ theme }) => styledLeft({ theme, ...props })
}

function width(props) {
  return ({ theme }) => styledWidth({ theme, ...props })
}

function borderBottom(props) {
  return ({ theme }) => styledBorderBottom({ theme, ...props })
}

function right(props) {
  return ({ theme }) => styledRight({ theme, ...props })
}

function display(props) {
  return ({ theme }) => styledDisplay({ theme, ...props })
}

function position(props) {
  return ({ theme }) => styledPosition({ theme, ...props })
}

function border(props) {
  return ({ theme }) => styledBorder({ theme, ...props })
}

function letterSpacing(props) {
  return ({ theme }) => styledLetterSpacing({ theme, ...props })
}

function lineHeight(props) {
  return ({ theme }) => styledLineHeight({ theme, ...props })
}

function maxWidth(props) {
  return ({ theme }) => styledMaxWidth({ theme, ...props })
}

function maxHeight(props) {
  return ({ theme }) => styledMaxHeight({ theme, ...props })
}

function minHeight(props) {
  return ({ theme }) => styledMinHeight({ theme, ...props })
}

export {
  color,
  fontSize,
  fontFamily,
  height,
  space,
  fontWeight,
  borderTop,
  gridGap,
  borderLeft,
  top,
  bottom,
  left,
  width,
  borderBottom,
  right,
  display,
  position,
  border,
  letterSpacing,
  lineHeight,
  maxWidth,
  maxHeight,
  minHeight
}
