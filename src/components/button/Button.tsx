import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { defaultTheme, themeType, VARIANT } from '../../theme'
import { IncreaseAnim, ANIM_STATUS } from '../increaseAnim/IncreaseAnim'
import chroma from 'chroma-js'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VARIANT
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

  ${({ theme = defaultProps.theme, variant = defaultProps.variant }: ButtonProps) => {
    const main = theme.colors[variant].main
    const contrast = theme.colors[variant].contrast
    const mainBrighten = chroma(main).brighten(0.4).hex()
    const mainBrightest = chroma(main).brighten(0.6).hex()
    const mainDarken = chroma(main).darken(0.5).hex()

    return css`
      background: ${main};
      color: ${contrast};
      border-color: ${main};

      &:hover {
        background: ${mainBrighten};
        border-color: ${mainBrighten};
      }

      &:active {
        background: ${mainBrightest};
        border-color: ${mainBrightest};
      }

      &:focus {
        border-color: ${mainDarken};
      }

      ${theme?.components?.button?.overrides}
    `
  }};
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