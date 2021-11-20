import styled, { css } from 'styled-components'
import { ThemeProp, VARIANT } from '../../../theme'
import { focusBackgroundPseudoStates } from '../../../styledHelpers'

export interface DayProps {
  className?: string
  children: string | number
  variant?: VARIANT
  selected?: boolean
  outOfMonth?: boolean
  tabIndex?: string | number
}

const defaultProps = {
  variant: VARIANT.PRIMARY,
  outOfMonth: false,
  selected: false,
  tabIndex: -1,
}

export const Day = styled.button.attrs(({ tabIndex = defaultProps.tabIndex }: DayProps) => ({ tabIndex }))`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0;
  margin: 0;
  flex: 1;
  height: 30px;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;

  ${({
    theme,
    variant = defaultProps.variant,
    outOfMonth = defaultProps.outOfMonth,
    selected = defaultProps.selected,
  }: DayProps & ThemeProp) => {
    const colorSelected = theme.colors[variant].main
    return css`
      opacity: ${outOfMonth ? '0.5' : '1'};
      background: ${selected ? colorSelected : 'transparent'};
      ${selected && focusBackgroundPseudoStates({ theme, variant })}
      ${theme.components?.day?.overrides}
    `
  }};
`
