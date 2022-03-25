import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../theme/'

const themes = [defaultTheme]
const AllTheProviders: FC = ({ children }) => <ThemeProvider theme={themes[0]}>{children}</ThemeProvider>

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
