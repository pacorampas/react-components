import React, { useState, useEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import c from 'classnames'
import { ThemeProp, VARIANT } from '../../theme'

export enum ANIM_STATUS {
  PLAY = 'play',
  STOP = 'stop',
}

export interface IncreaseAnimProps {
  className?: string
  /**
   * Use it to change the UI colors
   */
  variant?: VARIANT
  status?: ANIM_STATUS
  /**
   * Number of px to animation increase (width and height)
   */
  increase?: number
  /**
   * Use it to handle animation start
   */
  onPlay?: ({ status }: { status: ANIM_STATUS }) => void
  /**
   * Use it to handle when animations end
   */
  onStop?: ({ status }: { status: ANIM_STATUS }) => void
}

const defaultProps = {
  variant: VARIANT.PRIMARY,
  increase: 20,
}

const borderOutAnimation = ({
  increaseWidth = defaultProps.increase,
  increaseHeight = defaultProps.increase,
}) => keyframes`
    0% { transform: scale(1); opacity: 0.6; }
    100% { transform: ${`scale(${increaseWidth}, ${increaseHeight})`}; opacity: 0; }
  `

const Animatable = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;

  animation-name: none;
  animation-duration: 0.3s;
  animation-iteration-count: 1;

  &.running {
    ${({
      increaseWidth = defaultProps.increase,
      increaseHeight = defaultProps.increase,
    }: IncreaseAnimProps & {
      increaseWidth: number
      increaseHeight: number
    }) => css`
      animation-name: ${borderOutAnimation({ increaseWidth, increaseHeight })};
    `};
  }

  ${({ theme, variant = defaultProps.variant }: IncreaseAnimProps & ThemeProp) => css`
    background: ${theme.colors[variant].main};
    ${theme?.components?.borderOutAnim?.overrides}
  `};
`

/**
 * Component to make an animations interpolate from size (width and height) 100% and opacity 0.6
 * to size 120% and oapcity 0. Duration 0.3 seconds.
 */
export const IncreaseAnim = ({
  className,
  variant = defaultProps.variant,
  status = ANIM_STATUS.PLAY,
  increase = defaultProps.increase,
  onPlay,
  onStop,
}: IncreaseAnimProps) => {
  const animationRef = useRef<HTMLDivElement>(null)
  const [statusInternal, setStatusInternal] = useState<ANIM_STATUS>()

  useEffect(() => {
    const endAnimation = () => {
      setStatusInternal(ANIM_STATUS.STOP)
      onStop?.({ status: ANIM_STATUS.STOP })
    }

    animationRef?.current?.addEventListener('animationend', endAnimation)

    return () => animationRef?.current?.removeEventListener('animationend', endAnimation)
  }, [animationRef.current])

  useEffect(() => {
    setStatusInternal(status)

    if (status === ANIM_STATUS.PLAY) {
      onPlay?.({ status: ANIM_STATUS.PLAY })
    }
  }, [status])

  let increaseWidth = 0
  let increaseHeight = 0
  if (animationRef?.current) {
    increaseWidth = increase / animationRef?.current?.offsetWidth + 1
    increaseHeight = increase / animationRef?.current?.offsetHeight + 1
  }

  const running = ANIM_STATUS.PLAY === statusInternal

  return (
    <Animatable
      ref={animationRef}
      className={c(className, running && 'running')}
      {...{ variant, increaseWidth, increaseHeight }}
    />
  )
}
