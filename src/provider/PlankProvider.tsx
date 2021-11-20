import React from 'react'
import { ThemeProvider } from 'styled-components'
// import Fonts from '../fonts/index'
import { defaultTheme, ThemeProp } from '../theme'

export interface PlankProviderProps {
  theme: ThemeProp
  children: React.ReactNode
}

export const PlankProvider = ({ theme, children }: PlankProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

PlankProvider.defaultProps = {
  theme: defaultTheme,
}
