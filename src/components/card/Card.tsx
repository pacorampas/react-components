import React from 'react'
import styled, { css } from 'styled-components'
import { VARIANT } from '../../theme/theme.types'
import { CardProps } from './Card.types'

const defaultProps = {
  variant: VARIANT.WHITE,
}

const Wrapper = styled.div`
  position: relative;
  padding: ${({ theme }) => theme?.components?.card?.padding};
  border-radius: ${({ theme }) => theme?.components?.card?.borderRadius};

  ${({ theme, variant = defaultProps.variant }: CardProps) => css`
    background-color: ${theme.colors[variant].main};
  `};
`

const Card = React.memo(
  ({ variant, children }: CardProps): React.ReactElement => <Wrapper {...{ variant }}>{children}</Wrapper>,
)

Card.displayName = 'Card'

export { Card }
