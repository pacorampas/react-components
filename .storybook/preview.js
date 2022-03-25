import { withTests } from '@storybook/addon-jest'
import { ThemeProvider } from 'styled-components'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { addDecorator } from '@storybook/react'
import { darkTheme } from '../src/theme'

import results from '../.jest-test-results.json'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(withThemesProvider([darkTheme]), ThemeProvider)

export const decorators = [
  withTests({
    results,
  }),
]
