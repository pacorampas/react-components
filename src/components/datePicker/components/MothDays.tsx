import React from 'react'
import styled, { css } from 'styled-components'
import { DateTime } from 'luxon'
import { Day } from './Day'
import { VARIANT } from '../../../theme/theme.types'

export type DayArguments = {
  day: number
  ts: number
  date: Date
  prevMonth: boolean
  nextMonth: boolean
}

export interface MonthDaysProps {
  className?: string
  variant?: VARIANT
  daySelected?: Date
  monthSelected?: Date
  fillEmptyDays?: boolean
  onChange?: (arg: DayArguments) => void
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: solid 1px;

  ${({ theme }) => css`
    ${theme.components?.monthDays?.overrides}
  `};
`

const Row = styled.div`
  display: flex;
`

const defaultProps = {
  variant: VARIANT.PRIMARY,
  daySelected: new Date(),
  fillEmtyDays: false,
}

export const MonthDays = ({
  className,
  variant = defaultProps.variant,
  daySelected = defaultProps.daySelected,
  monthSelected,
  fillEmptyDays = defaultProps.fillEmtyDays,
  onChange = undefined,
}: MonthDaysProps) => {
  const luxonDate = DateTime.fromJSDate(monthSelected || daySelected).startOf('day')
  const luxonSelectedDate = DateTime.fromJSDate(daySelected).startOf('day')
  const firstDayOfMonth = luxonDate.set({ day: 1 })
  const lastDayOfMonth = luxonDate.set({ day: firstDayOfMonth.daysInMonth })

  const renderDays = () => {
    const fillMonthBeforeWith = firstDayOfMonth.weekday
    const totalDaysInMonth = luxonDate.daysInMonth
    const fillMonthAfterWith = 7 - lastDayOfMonth.weekday

    const daysArray = []
    let i = 1
    while (i < fillMonthBeforeWith) {
      const diff = fillMonthBeforeWith - i
      const date = firstDayOfMonth.minus({ days: diff })
      daysArray.push({
        ts: date.toFormat('x'),
        day: date.day,
        date: date.toJSDate(),
        prevMonth: true,
        nextMonth: false,
      })
      i += 1
    }

    i = 0
    while (i < totalDaysInMonth) {
      const date = firstDayOfMonth.plus({ days: i })
      daysArray.push({
        ts: date.toFormat('x'),
        day: date.day,
        date: date.toJSDate(),
        prevMonth: false,
        nextMonth: false,
      })
      i += 1
    }

    i = 1
    while (i <= fillMonthAfterWith) {
      const date = lastDayOfMonth.plus({ days: i })
      daysArray.push({
        ts: date.toFormat('x'),
        day: date.day,
        date: date.toJSDate(),
        prevMonth: false,
        nextMonth: true,
      })
      i += 1
    }

    return daysArray
  }

  const daysInRows = ({ daysToRender }: { daysToRender: any[] }) => {
    const rows: { [key: number]: any[] } = {}
    let rowIndex = -1
    daysToRender.forEach((day, i) => {
      if (i % 7 === 0) {
        rowIndex += 1
      }

      if (!rows[rowIndex]) {
        rows[rowIndex] = []
      }

      rows[rowIndex].push(day)
    })

    return rows
  }

  const daysToRender = renderDays()
  const rows = daysInRows({ daysToRender })

  const handleDayClick = function (this: DayArguments) {
    onChange?.(this)
  }

  return (
    <Wrapper {...{ className }}>
      {Object.keys(rows).map((key: any) => {
        const row = rows[key]
        return (
          <Row key={key}>
            {row.map((day: DayArguments) => {
              const isOutDay = day.prevMonth || day.nextMonth

              if (!fillEmptyDays && isOutDay) {
                return <Day key={day.ts} disabled />
              }

              return (
                <Day
                  {...{ variant }}
                  key={day.ts}
                  selected={luxonSelectedDate.toMillis() === DateTime.fromJSDate(day.date).startOf('day').toMillis()}
                  outOfMonth={day.prevMonth || day.nextMonth}
                  onClick={handleDayClick.bind(day)}
                >
                  {day.day}
                </Day>
              )
            })}
          </Row>
        )
      })}
    </Wrapper>
  )
}
