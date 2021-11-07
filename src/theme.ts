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
  space: number
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
  space: 1,
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
  components: {
    card: {
      padding: '12px',
      borderRadius: '12px',
    },
    text: {
      fontSizes: {
        xs: {
          'font-size': '20px',
          'line-height': '1.2',
        },
        s: {
          'font-size': '24px',
          'line-height': '1.33',
        },
        sm: {
          'font-size': '28px',
          'line-height': '1.29',
        },
        m: {
          'font-size': '40px',
          'line-height': '1.2',
        },
        ml: {
          'font-size': '48px',
          'line-height': '1.25',
        },
        l: {
          'font-size': '56px',
          'line-height': '1.29',
        },
        xl: {
          'font-size': '68px',
          'line-height': '1.18',
        },
        xxl: {
          'font-size': '80px',
          'line-height': '1.2',
        },
      },
    },
  },
}

export const alternativeTheme: themeType = {
  name: 'alternative',
  space: 1,
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
    [VARIANT.WHITE]: {
      main: '#fff',
      contrast: '#333',
    },
  },
  components: {
    card: {
      padding: '24px',
      borderRadius: '6px',
    },
    text: {
      fontSizes: {
        xs: {
          'font-size': '20px',
          'line-height': '1.2',
        },
        s: {
          'font-size': '24px',
          'line-height': '1.33',
        },
        sm: {
          'font-size': '28px',
          'line-height': '1.29',
        },
        m: {
          'font-size': '40px',
          'line-height': '1.2',
        },
        ml: {
          'font-size': '48px',
          'line-height': '1.25',
        },
        l: {
          'font-size': '56px',
          'line-height': '1.29',
        },
        xl: {
          'font-size': '68px',
          'line-height': '1.18',
        },
        xxl: {
          'font-size': '80px',
          'line-height': '1.2',
        },
      },
    },
  },
}

export const themes = [defaultTheme, alternativeTheme]
