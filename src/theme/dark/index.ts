import { DefaultTheme } from 'styled-components'
import { VARIANT, colorType } from '../theme.types'

const darkColors: { [key: string]: colorType } = {
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

export const darkTheme: DefaultTheme = {
  name: 'default',
  space: 1,
  colors: darkColors,
  components: {
    card: {
      padding: '12px',
      borderRadius: '12px',
    },
    text: {
      fontSizes: {
        xs: {
          'font-size': '10px',
          'line-height': '1.2',
        },
        s: {
          'font-size': '12px',
          'line-height': '1.33',
        },
        sm: {
          'font-size': '14px',
          'line-height': '1.29',
        },
        m: {
          'font-size': '16px',
          'line-height': '1.2',
        },
        ml: {
          'font-size': '18px',
          'line-height': '1.25',
        },
        l: {
          'font-size': '20px',
          'line-height': '1.29',
        },
        xl: {
          'font-size': '24px',
          'line-height': '1.18',
        },
        xxl: {
          'font-size': '30px',
          'line-height': '1.2',
        },
      },
    },
    input: {
      fontSize: '14px',
      backgroundColor: 'transparent',
      color: darkColors[VARIANT.NTRL_LIGHT].main,
      placeholder: {
        fontSize: '14px',
        fontWeight: 500,
        color: darkColors[VARIANT.NTRL_LIGHT].main,
      },
      padding: '12px 18px',
      border: {
        style: 'solid',
        width: '1px',
        color: darkColors[VARIANT.NTRL_LIGHT].main,
        radius: '3px',
        activeColor: darkColors[VARIANT.SECONDARY].main,
      },
      helpText: {
        fontSize: '12px',
        fontWeight: 300,
        color: darkColors[VARIANT.NTRL_LIGHT].main,
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
