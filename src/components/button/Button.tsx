import React from 'react'
import styled, { css } from 'styled-components'
import { ThemeProp, VARIANT } from '../../theme'

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

const StyledButton = styled.button<Partial<ButtonProps>>`
  position: relative;
  font-family: 'Poppins';
  font-size: ${({ theme }) => theme.components.button.fontSize};
  background-color: ${({ theme, variant, bordered }) => {
    const color = theme.colors[variant ?? VARIANT.PRIMARY]
    return bordered ? 'transparent' : color.main
  }};
  color: ${({ theme, variant, bordered }) => {
    const color = theme.colors[variant ?? VARIANT.PRIMARY]
    return bordered ? color.main : color.contrast
  }};
  height: ${({ theme }) => theme.components.button.height};
  padding: ${({ theme }) => theme.components.button.padding};
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;

  ${({ theme, variant }) => {
    const { style, width, radius } = theme?.components?.button?.border ?? {}

    return css`
      border-style: ${style};
      border-width: ${width};
      border-color: ${theme.colors[variant ?? VARIANT.PRIMARY]?.main};
      border-radius: ${radius};

      &:not([disabled]):hover,
      &:not([disabled]):focus,
      &:not([disabled]):active {
        box-shadow: ${() => `0 0 0 1px ${theme.colors[variant ?? VARIANT.PRIMARY]?.main}`};
        opacity: ${({ theme, bordered }: Partial<ButtonProps>) =>
          !bordered && `${theme?.components?.button?.activeOpacity}`};
        background-color: ${({ theme, variant, bordered }: Partial<ButtonProps>) =>
          bordered && theme?.colors[variant ?? VARIANT.PRIMARY].main};
        color: ${({ theme, variant, bordered }: Partial<ButtonProps>) =>
          bordered && theme?.colors[variant ?? VARIANT.PRIMARY].contrast};
      }
    `
  }};

  &:disabled {
    cursor: auto;
    opacity: ${({ theme }) => theme.components.button.disabledOpacity};
  }
`

export const Button = ({ variant, bordered, children, ...rest }: ButtonProps): React.ReactElement => (
  <StyledButton variant={variant} bordered={bordered} {...rest}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  type: 'button',
  disabled: false,
  bordered: false,
}
