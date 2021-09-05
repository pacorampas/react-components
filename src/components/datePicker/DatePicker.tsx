import React, { useState } from 'react';
import { DateTime } from 'luxon'
import styled from 'styled-components'
import { MonthDays } from './MothDays';

interface DatePickerProps {
  date: Date
}

const defaultDate = new Date()

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
  background: #eee;
  border-radius: 3px;
  box-sizing: border-box;
`

const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`

/**
 * Primary UI component for user interaction
 */
export const DatePicker = ({
  date = defaultDate,
}: DatePickerProps) => {
  const [luxonDate, setLuxonDate] = useState(DateTime.fromJSDate(date).startOf('day'))

  const handleClickNext = () => {
    setLuxonDate(luxonDate.plus({ months: 1 }))
  }

  const handleClickBack = () => {
    setLuxonDate(luxonDate.minus({ months: 1 }))
  }

  return (
    <Wrapper>
      <Header>
        <IconButton onClick={handleClickBack}>{'<'}</IconButton>
        <MonthTitle>{luxonDate.toFormat('MMMM y')}</MonthTitle>
        <IconButton onClick={handleClickNext}>{'>'}</IconButton>
      </Header>
      <MonthDays date={luxonDate.toJSDate()} />
    </Wrapper>
  );
};
