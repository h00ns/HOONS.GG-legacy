export const breakpoints: { [index: string]: number } = {
  sm: 480,  
  md: 768,
  lg: 992,
  xl: 1200,
};


// Media Query
export const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (max-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });
