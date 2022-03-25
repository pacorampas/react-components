import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { focusBackgroundPseudoStates } from '../../styledHelpers'
import { ThemeProp, VARIANT } from '../../theme/theme.types'
import { IncreaseAnim, ANIM_STATUS } from '../increaseAnim/IncreaseAnim'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VARIANT
  /**
   * Use a button without background
   */
  bordered?: boolean
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
  bordered: false,
}

const Wrapper = styled.button`
  position: relative;
  outline: 0;
  border: solid 2px transparent;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  ${({ theme, variant = defaultProps.variant, bordered = defaultProps.bordered }: ButtonProps & ThemeProp) => css`
    ${focusBackgroundPseudoStates({ theme, variant, bordered })}
    ${theme?.components?.button?.overrides}
  `};
`

const Label = styled.span`
  position: relative;
  font-family: 'Poppins';
`

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = defaultProps.variant,
  children,
  onClick,
  ...rest
}: ButtonProps): React.ReactElement => {
  const [anim, setAnim] = useState(false)

  const handleClick = () => {
    setAnim(true)
    onClick?.()
  }

  const handleIncreaseAnimStop = () => {
    setAnim(false)
  }

  return (
    <Wrapper {...{ variant }} onClick={handleClick} {...rest}>
      <>
        {anim && (
          <IncreaseAnim
            variant={variant as VARIANT}
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
