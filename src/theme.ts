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
    primary: {
      main: 'pink',
      contrast: 'black',
    },
    negative: {
      main: 'red',
      contrast: 'white',
    },
    positive: {
      main: 'green',
      contrast: 'white',
    },
    warning: {
      main: 'orange',
      contrast: 'white',
    },
    info: {
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
