export enum VARIANT {
  PRIMARY = 'primary',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
  WARNING = 'warning',
  INFO = 'info',
}
export type colorType = {
  main: string
  contrast: string
}

export type focusType = {
  color: colorType
}

export type themeType = {
  colors: {
    [key: string]: colorType
  }
  focus: focusType
  components?: any
}

export const defaultTheme: themeType = {
  colors: {
    [VARIANT.PRIMARY]: {
      main: 'pink',
      contrast: 'black',
    },
    [VARIANT.NEGATIVE]: {
      main: 'red',
      contrast: 'white',
    },
    [VARIANT.POSITIVE]: {
      main: 'green',
      contrast: 'white',
    },
    [VARIANT.WARNING]: {
      main: 'orange',
      contrast: 'white',
    },
    [VARIANT.INFO]: {
      main: 'blue',
      contrast: 'white',
    },
  },
  focus: {
    color: {
      main: 'red',
      contrast: 'white',
    },
  },
  components: {},
}
