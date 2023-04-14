const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

const media = {
  sm: (styles) => `@media (max-width: ${breakpoints.sm}) { ${styles} }`,
  md: (styles) => `@media (max-width: ${breakpoints.md}) { ${styles} }`,
  lg: (styles) => `@media (max-width: ${breakpoints.lg}) { ${styles} }`,
  xl: (styles) => `@media (max-width: ${breakpoints.xl}) { ${styles} }`,
};

export default media;
