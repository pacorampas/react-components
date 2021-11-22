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

export const colors: { [key: string]: colorType } = {
  [VARIANT.PRIMARY]: {
    main: '#5767ff',
    contrast: '#ffffff',
  },
  [VARIANT.SECONDARY]: {
    main: '#52cca5',
    contrast: '#ffffff',
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
    main: '#ffffff',
    contrast: '#002426',
  },
  [VARIANT.BLACK]: {
    main: '#002426',
    contrast: '#ffffff',
  },
  [VARIANT.NTRL_LIGHT]: {
    main: '#aaafb8',
    contrast: '#ffffff',
  },
  [VARIANT.NTRL_DARK]: {
    main: '#2c364c',
    contrast: '#ffffff',
  },
  [VARIANT.NTRL_DARKEST]: {
    main: '#232d43',
    contrast: '#5767ff',
  },
}

export const defaultTheme: themeType = {
  name: 'default',
  space: 1,
  colors,
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
    input: {
      fontSize: '14px',
      backgroundColor: 'transparent',
      color: colors[VARIANT.NTRL_LIGHT].main,
      placeholder: {
        fontSize: '14px',
        fontWeight: 500,
        color: colors[VARIANT.NTRL_LIGHT].main,
      },
      padding: '12px 18px',
      border: {
        style: 'solid',
        width: '1px',
        color: colors[VARIANT.NTRL_LIGHT].main,
        radius: '3px',
        activeColor: colors[VARIANT.SECONDARY].main,
      },
      helpText: {
        fontSize: '12px',
        fontWeight: 300,
        color: colors[VARIANT.NTRL_LIGHT].main,
      },
    },
    button: {
      fontSize: '14px',
      height: '45px',
      padding: '0 18px',
      border: {
        style: 'solid',
        width: '1px',
        radius: '3px',
      },
      activeOpacity: 0.7,
      disabledOpacity: 0.5,
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
    input: {
      placeholder: {
        fontSize: '16px',
        fontWeight: 500,
        color: VARIANT.PRIMARY,
      },
      padding: '6px 12px',
      border: `solid 2px ${VARIANT.PRIMARY}`,
      borderRadius: '6px',
      helpText: {
        fontSize: '14px',
        fontWeight: 300,
        color: 'red',
      },
    },
  },
}

export const themes = [defaultTheme, alternativeTheme]
