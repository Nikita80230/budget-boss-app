export const sizes = {
  xxl: 1600,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 376,
}

export const media = (size, value, type = 'max-width') => {
  switch (type) {
    case 'min-width':
      return `
        @media (min-width: ${sizes[size]}px) {
          ${value}
        }
      `
    default:
      return `
        @media (max-width: ${sizes[size] - 0.02}px) {
          ${value}
        }
      `
  }
}

export const breakpoint = (size, type = 'max-width') => {
  switch (type) {
    case 'min-width':
      return `${sizes[size]}px`
    default:
      return `${sizes[size] - 0.02}px`
  }
}
