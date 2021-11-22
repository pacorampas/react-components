import { ThemeProp, VARIANT } from '../../theme/theme.types'

export interface ButtonProps extends ThemeProp, React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  /**
   * The id of the `button` element.
   */
  id?: string
  /**
   * Is button disabled?
   */
  disabled?: boolean
  /**
   * Button children
   */
  children: React.ReactChild | string
  /**
   * Button variant
   */
  variant: VARIANT
  /**
   * Is button bordered?
   */
  bordered?: boolean
}
