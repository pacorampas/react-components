import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import styled, { css, keyframes } from 'styled-components'
import c from 'classnames'
import { defaultTheme, themeType, VARIANT } from '../../theme'

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
  theme?: themeType
  status?: ANIM_STATUS
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
  theme: defaultTheme,
}

const borderOutAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.2); opacity: 0; }
`

const Animatable = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  animation-name: ${borderOutAnimation};
  animation-duration: 0.3s;
  animation-iteration-count: 1;

  &.show {
    display: block;
  }

  ${({ theme = defaultProps.theme, variant = defaultProps.variant }: IncreaseAnimProps) => css`
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
  theme = defaultProps.theme,
  status = ANIM_STATUS.PLAY,
  onPlay,
  onStop,
}: IncreaseAnimProps) => {
  const animationRef = useRef<HTMLDivElement>(null)
  const [statusInternal, setStatusInternal] = useState<ANIM_STATUS>()

  useLayoutEffect(() => {
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

  const show = ANIM_STATUS.PLAY === statusInternal

  return <Animatable ref={animationRef} className={c(className, show && 'show')} {...{ theme, variant }} />
}
