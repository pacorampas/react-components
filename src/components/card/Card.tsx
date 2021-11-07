import React from 'react'
import styled, { css } from 'styled-components'
import { themeProp, VARIANT } from '../../theme'

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
  padding: ${({ theme }) => theme?.components?.card?.padding};
  border-radius: ${({ theme }) => theme?.components?.card?.borderRadius};

  ${({ theme, variant = defaultProps.variant }: CardProps & themeProp) => css`
    background-color: ${theme.colors[variant].main};
  `};
`

const Card = ({ variant, children }: CardProps): React.ReactElement => <Wrapper {...{ variant }}>{children}</Wrapper>

export default React.memo(Card)
