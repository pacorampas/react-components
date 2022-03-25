import 'styled-components'
import { themeType } from './theme/theme.types'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeType {}
}
