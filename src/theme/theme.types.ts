export enum VARIANT {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
  WARNING = 'warning',
  INFO = 'info',
  NTRL_LIGHT = 'ntrl_light',
  NTRL_DARK = 'ntrl_dark',
  NTRL_DARKEST = 'ntrl_darkest',
  WHITE = 'white',
  BLACK = 'black',
}

export type colorType = {
  main: string
  contrast: string
}

export type focusType = {
  color: colorType
}

export type themeType = {
  name: string
  space: number
  colors: {
    [key: string]: colorType
  }
  components?: any
}

export type ThemeProp = {
  theme: themeType
}
