/* eslint-disable import/prefer-default-export */
import chroma from 'chroma-js'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { margin } from 'polished'
import { Styles } from 'polished/lib/types/style'
import { themeType, VARIANT } from '../theme'

export const focusBackgroundPseudoStates = ({
  theme,
  variant = VARIANT.PRIMARY,
  bordered = false,
}: {
  theme: themeType
  variant?: VARIANT
  bordered?: boolean
}): FlattenSimpleInterpolation => {
  const { main } = theme.colors[variant]
  const { contrast } = theme.colors[variant]
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

const admittedValues = ({ value }: { value: string }) =>
  value === 'auto' ||
  value === 'inherit' ||
  value === 'initial' ||
  value === 'unset' ||
  value.endsWith('px') ||
  value.endsWith('%')

const getSizeValue = ({ value, space }: { value: number | string; space: number }): string => {
  if (typeof value === 'number') {
    return `${value * space}px`
  }

  if (typeof value === 'string' && admittedValues({ value })) {
    return value
  }

  // Skip the wrong proposed value
  return ''
}

const getArrayValues = ({ values, space }: { values?: (number | string)[]; space: number }): (number | string)[] => {
  if (!Array.isArray(values) || !values.length) {
    return ['', '', '', '']
  }
  const valuesLen = values.length
  switch (valuesLen) {
    case 1:
      return Array(4).fill(getSizeValue({ value: values[0], space }))
    case 2:
      return [values[0], values[1], values[0], values[1]].map((value) => getSizeValue({ value, space }))
    case 3:
      return [values[0], values[1], values[2], values[1]].map((value) => getSizeValue({ value, space }))
    default:
      return values.map((value) => getSizeValue({ value, space }))
  }
}

const overwriteArrayValues = ({
  values,
  top,
  right,
  bottom,
  left,
  space,
}: {
  values: (number | string)[]
  top?: number | string
  right?: number | string
  bottom?: number | string
  left?: number | string
  space: number
}): (number | string)[] => {
  const arrValues = [...values]
  if (top != null) {
    arrValues[0] = getSizeValue({ value: top, space })
  }

  if (right != null) {
    arrValues[1] = getSizeValue({ value: right, space })
  }

  if (bottom != null) {
    arrValues[2] = getSizeValue({ value: bottom, space })
  }

  if (left != null) {
    arrValues[3] = getSizeValue({ value: left, space })
  }

  return arrValues
}

export const getMargins = ({
  theme,
  margins,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}: {
  theme: themeType
  margins?: (number | string)[]
  marginTop?: number | string
  marginRight?: number | string
  marginBottom?: number | string
  marginLeft?: number | string
}): Styles => {
  const { space } = theme

  let arrValues = getArrayValues({
    values: margins,
    space,
  })

  arrValues = overwriteArrayValues({
    values: arrValues,
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
    space,
  })

  return margin(...arrValues)
}
