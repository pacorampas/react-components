import chroma from 'chroma-js'
import { css } from 'styled-components'
import { themeType, VARIANT } from '../theme'

export const focusBackgroundPseudoStates = ({
  theme,
  variant = VARIANT.PRIMARY,
  bordered = false,
}: {
  theme: themeType
  variant?: VARIANT
  bordered?: boolean
}) => {
  const main = theme.colors[variant].main
  const contrast = theme.colors[variant].contrast
  const mainBrighten = chroma(main).brighten(0.4).hex()
  const mainBrightest = chroma(main).brighten(0.6).hex()
  const mainDarken = chroma(main).darken(0.5).hex()

  return css`
    background: ${bordered ? 'transparent' : main};
    color: ${bordered ? main : contrast};
    border-color: ${main};

    &:hover {
      background: ${bordered ? 'transparent' : mainBrighten};
      border-color: ${mainBrighten};
      color: ${bordered ? mainBrighten : contrast};
    }

    &:active {
      background: ${bordered ? 'transparent' : mainBrightest};
      border-color: ${mainBrightest};
      color: ${bordered ? mainBrightest : contrast};
    }

    &:focus {
      border-color: ${mainDarken};
    }
  `
}
