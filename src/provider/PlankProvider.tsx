import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme'
// import Fonts from '../fonts/index'

export interface PlankProviderProps {
  theme: DefaultTheme
  children: React.ReactNode
}

export const PlankProvider = ({ theme, children }: PlankProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

PlankProvider.defaultProps = {
  theme: defaultTheme,
}
