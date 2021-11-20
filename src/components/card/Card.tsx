import React from 'react'
import styled, { css } from 'styled-components'
import { ThemeProp, VARIANT } from '../../theme'

export interface CardProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: VARIANT
  /**
   * Card contents
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

  ${({ theme, variant = defaultProps.variant }: CardProps & ThemeProp) => css`
    background-color: ${theme.colors[variant].main};
  `};
`

const Card = React.memo(
  ({ variant, children }: CardProps): React.ReactElement => <Wrapper {...{ variant }}>{children}</Wrapper>,
)

Card.displayName = 'Card'

export { Card }
