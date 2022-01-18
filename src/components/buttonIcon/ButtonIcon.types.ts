import { VARIANT } from '../../theme/theme.types'

export interface ButtonIconProps extends React.HTMLAttributes<HTMLButtonElement> {
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
  icon: React.ReactElement
  /**
   * Button variant
   */
  variant?: VARIANT
  /**
   * Is button bordered?
   */
  bordered?: boolean
}
