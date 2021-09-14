import React, { useState } from 'react'
import { DateTime } from 'luxon'
import styled, { css } from 'styled-components'
import { MonthDays, DayArguments } from './components/MothDays'
import { VARIANT } from '../../theme'

export interface DatePickerProps {
  className?: string
  variant?: VARIANT
  selected?: Date
  fillEmptyDays?: boolean
  onChange?: ({ date }: { date: Date }) => void
}

const defaultProps = {
  variant: VARIANT.PRIMARY,
  selected: new Date(),
  fillEmptyDays: false,
}

const Wrapper = styled.div`
  width: 100%;
  min-width: 210px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  background: none;
  border-color: transparent;
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  opacity: 0.7;
  transform: scale(0.9);

  ${() => css`
    &:hover {
      opacity: 1;
      transform: scale(1);
      transition: opacity 0.1s, transform 0.1s;
    }
    &:active {
      transform: scale(0.8);
      transition: transform 0.1s;
    }
  `};
`

const MonthTitle = styled.span`
  flex: 1;
  text-align: center;
`

/**
 * Primary UI component for user interaction
 */
export const DatePicker = ({
  className,
  variant = defaultProps.variant,
  selected = defaultProps.selected,
  fillEmptyDays = defaultProps.fillEmptyDays,
  onChange,
  ...rest
}: DatePickerProps) => {
  const [luxonSelectedDay, setLuxonSelectedDay] = useState(DateTime.fromJSDate(selected).startOf('day'))
  const [luxonSelectedMonth, setLuxonSelectedMonth] = useState(DateTime.fromJSDate(selected).startOf('day'))

  const handleClickNext = () => {
    const nextLuxonMonth = luxonSelectedMonth.plus({ months: 1 })
    setLuxonSelectedMonth(nextLuxonMonth)
  }

  const handleClickBack = () => {
    const nextLuxonMonth = luxonSelectedMonth.minus({ months: 1 })
    setLuxonSelectedMonth(nextLuxonMonth)
  }

  const hanldeChange = ({ date }: DayArguments) => {
    setLuxonSelectedDay(DateTime.fromJSDate(date).startOf('day'))
    onChange?.({ date })
  }

  return (
    <Wrapper {...{ className }}>
      <Header>
        <IconButton onClick={handleClickBack}>{'<'}</IconButton>
        <MonthTitle>{luxonSelectedMonth.toFormat('MMMM y')}</MonthTitle>
        <IconButton onClick={handleClickNext}>{'>'}</IconButton>
      </Header>
      <MonthDays
        {...{ variant }}
        daySelected={luxonSelectedDay.toJSDate()}
        monthSelected={luxonSelectedMonth.toJSDate()}
        fillEmptyDays={fillEmptyDays}
        onChange={hanldeChange}
      />
    </Wrapper>
  )
}
