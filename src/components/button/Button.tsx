import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { defaultTheme, themeType, VARIANT } from '../../theme'
import { IncreaseAnim, ANIM_STATUS } from '../increaseAnim/IncreaseAnim'

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
  position: relative;
  outline: 0;
  border: solid 2px transparent;
  color: white;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${({ theme = defaultProps.theme, variant = defaultProps.variant }: ButtonProps) => css`
    background: ${theme.colors[variant].main};
    color: ${theme.colors[variant].contrast};
    ${theme?.components?.button?.overrides}
  `};
`

const Label = styled.span`
  position: relative;
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
  const [anim, setAnim] = useState(false)

  const handleClick = () => {
    setAnim(true)
    onClick?.()
  }

  const handleIncreaseAnimStop = () => {
    setAnim(false)
  }

  return (
    <Wrapper {...{ variant, theme }} onClick={handleClick} {...rest}>
      <>
        {anim && (
          <IncreaseAnim
            {...{ theme }}
            variant={variant as any as VARIANT}
            status={ANIM_STATUS.PLAY}
            increase={20}
            onStop={handleIncreaseAnimStop}
          />
        )}
        <Label>{children}</Label>
      </>
    </Wrapper>
  )
}
