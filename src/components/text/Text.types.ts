import { VARIANT, ThemeProp } from '../../theme/theme.types'

export enum TEXT_SIZES {
  xs = 'xs',
  s = 's',
  sm = 'sm',
  m = 'm',
  ml = 'ml',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
}

export enum TEXT_ALIGN {
  left = 'left',
  center = 'center',
  right = 'right',
}

export enum TEXT_TRASFORM {
  capitalize = 'capitalize',
  uppercase = 'uppercase',
  lowercase = 'lowercase',
  inherit = 'inherit',
  unset = 'unset',
}

export enum TEXT_WEIGHT {
  // '300' = '300',
  'light' = 'light',
  // '400' = '400',
  'regular' = 'regular',
  // '500' = '500',
  'medium' = 'medium',
  // '600' = '600',
  'semibold' = 'semibold',
  // '700' = '700',
  'bold' = 'bold',
  // '800' = '800',
  'black' = 'black',
}

export interface TextProps extends ThemeProp {
  /**
   * Is this the principal call to action on the page?
   */
  variant: VARIANT
  /**
   * Button contents
   */
  children: JSX.Element | string
  /**
   * Text size
   */
  size: TEXT_SIZES
  /**
   * Is text bold
   */
  bold: boolean
  /**
   * Text align
   */
  align: TEXT_ALIGN
  /**
   * Text transform
   */
  transform: TEXT_TRASFORM
  /**
   * Text ellipsis
   */
  truncate: boolean
  /**
   * Text weight
   */
  weight: TEXT_WEIGHT
  /**
   * Text margins
   */
  margins?: (number | string)[]
  marginTop?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  marginLeft?: number | string
}

export interface TextDraftProps {
  /**
   * Is draft text
   */
  draft: boolean
  /**
   * Number of lines to render as draft text
   */
  draftLines: number
}
