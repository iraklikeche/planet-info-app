const breakpoints = {
  sm: "580px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

// const media = {
//   sm: (styles) => `@media (max-width: ${breakpoints.sm}) { ${styles} }`,
//   md: (styles) => `@media (max-width: ${breakpoints.md}) { ${styles} }`,
//   lg: (styles) => `@media (max-width: ${breakpoints.lg}) { ${styles} }`,
//   xl: (styles) => `@media (max-width: ${breakpoints.xl}) { ${styles} }`,
// };

const media = {
  sm: (styles) => `@media (max-width: ${breakpoints.sm}) { ${styles} }`,
  md: (styles) =>
    `@media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md}) { ${styles} }`,
  lg: (styles) =>
    `@media (min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg}) { ${styles} }`,
  xl: (styles) => `@media (min-width: ${breakpoints.lg})  { ${styles} }`,
};

export default media;
