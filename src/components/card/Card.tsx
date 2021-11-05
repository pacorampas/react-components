import React from 'react'
import styled, { css } from 'styled-components'
import { themeProp, VARIANT } from 'theme'

export interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VARIANT
  /**
   * Button contents
   */
  children: JSX.Element | string
}

const defaultProps = {
  variant: VARIANT.WHITE,
}

const Wrapper = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 12px;

  /* ${({ theme, variant = defaultProps.variant }: CardProps & themeProp) => {
    return css`
      background-color: ${theme.colors[variant].main};
    `
  }}; */
`

const Card = ({ variant, children }: CardProps): React.ReactElement => {
  return <Wrapper {...{ variant }}>{children}</Wrapper>
}

export default React.memo(Card)
