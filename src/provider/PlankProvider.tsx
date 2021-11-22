import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from 'theme'
// import Fonts from '../fonts/index'
import { ThemeProp } from '../theme/theme.types'

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
