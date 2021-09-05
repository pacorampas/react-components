import React from 'react';
import styled from 'styled-components'
import { DateTime } from 'luxon'

const Wrapper = styled.div`
  width: 100%;
  border: solid 1px;
`

const Row = styled.div`
  display: flex;
`

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 30px;
  border: solid;
  box-sizing: border-box;
`

const defaultDate = new Date()

interface MonthDaysProps {
  date: Date
}

export const MonthDays = ({
  date = defaultDate
}: MonthDaysProps) => {
  const luxonDate = DateTime.fromJSDate(date).startOf('day')
  const firstDayOfMonth = luxonDate.set({ day: 1 })
  const lastDayOfMonth = luxonDate.set({ day: firstDayOfMonth.daysInMonth })
  
  const renderDays = () => {
    const fillMonthBeforeWith = firstDayOfMonth.weekday
    const totalDaysInMonth = luxonDate.daysInMonth
    const fillMonthAfterWith = 7 - lastDayOfMonth.weekday

    const daysArray = []
    let i = 1
    while(i < fillMonthBeforeWith) {
      const diff = fillMonthBeforeWith - i
      const date = firstDayOfMonth.minus({ days: diff })
      daysArray.push(<Day key={date.toFormat('x')}>{date.day}</Day>)
      i += 1
    }
    
    i = 0
    while(i < totalDaysInMonth) {
      const date = firstDayOfMonth.plus({ days: i })
      daysArray.push(<Day key={date.toFormat('x')}>{date.day}</Day>)
      i += 1
    }

    i = 1
    while(i <= fillMonthAfterWith) {
      const date = lastDayOfMonth.plus({ days: i })
      daysArray.push(<Day key={date.toFormat('x')}>{date.day}</Day>)
      i += 1
    }

    return daysArray
  }

  const daysInRows = ({ daysToRender }: { daysToRender: any[] }) => {
    const rows: { [key: number]: any[] } = {}
    let rowIndex: number = -1
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

  return (
    <Wrapper>
      {Object.values(rows).map(row => 
        <Row>
          {row.map((day) => day)}
        </Row>
      )}
    </Wrapper>
  );
};
