import React from 'react'
import styled, { css } from 'styled-components'
import { defaultTheme, themeType, VARIANT } from '../../theme'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: string
  theme?: themeType
  /**
   * Button contents
   */
  children: JSX.Element | string
  /**
   * Optional click handler
   */
  onClick?: () => void
}

const defaultProps = {
  variant: VARIANT.PRIMARY,
  theme: defaultTheme,
}

const Wrapper = styled.button`
  outline: 0;
  border: solid 2px transparent;
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    border-color: ${({ theme = defaultProps.theme }: ButtonProps) => theme.focus.color.main};
  }

  ${({ theme = defaultProps.theme, variant = defaultProps.variant }: ButtonProps) => css`
    background: ${theme.colors[variant].main};
    color: ${theme.colors[variant].contrast};
    ${theme?.components?.button?.overrides}
  `};
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = defaultProps.variant,
  theme = defaultProps.theme,
  children,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <Wrapper {...{ variant, theme, onClick }} {...rest}>
      {children}
    </Wrapper>
  )
}
