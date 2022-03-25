import { VARIANT } from '../../theme/theme.types'

export interface CardProps {
  className?: string
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VARIANT
  /**
   * Card contents
   */
  children: React.ReactNode
}
