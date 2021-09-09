import React from 'react'
import styled, { css } from 'styled-components'
import { defaultTheme, themeType } from '../../theme'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant: string
  /**
   * Button contents
   */
  children: JSX.Element | string
  /**
   * Optional click handler
   */
  onClick?: () => void
  theme: themeType
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
    border-color: ${({ theme }: ButtonProps) => theme.focus.color.main};
  }

  ${({ theme, variant }: ButtonProps) => css`
    background: ${theme.colors[variant].main};
    color: ${theme.colors[variant].contrast};
    ${theme?.components?.button?.overrides}
  `};
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant = 'primary', theme = defaultTheme, children, onClick, ...rest }: ButtonProps) => {
  return (
    <Wrapper {...{ variant, theme, onClick }} {...rest}>
      {children}
    </Wrapper>
  )
}
