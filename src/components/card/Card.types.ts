import { VARIANT, ThemeProp } from '../../theme/theme.types'

export interface CardProps extends ThemeProp {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VARIANT
  /**
   * Card contents
   */
  children: JSX.Element | string
}
