export enum VARIANT {
  PRIMARY = 'primary',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
  WARNING = 'warning',
  INFO = 'info',
  WHITE = 'white',
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
  colors: {
    [key: string]: colorType
  }
  components?: any
}

export type themeProp = {
  theme: themeType
}

export const defaultTheme: themeType = {
  name: 'default',
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
    [VARIANT.WHITE]: {
      main: '#fff',
      contrast: '#333',
    },
  },
  components: {},
}

export const alternativeTheme: themeType = {
  name: 'alternative',
  colors: {
    [VARIANT.PRIMARY]: {
      main: 'orange',
      contrast: 'black',
    },
    [VARIANT.NEGATIVE]: {
      main: 'blue',
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
  components: {},
}

export const themes = [defaultTheme, alternativeTheme]
