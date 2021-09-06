import React, { useState } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";
import { MonthDays, DayArguments } from "./MothDays";

interface DatePickerProps {
  date?: Date;
  onChange?: ({ date }: { date: Date }) => void;
}

const defaultDate = new Date();

const Wrapper = styled.div`
  width: 100%;
  min-width: 210px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
`;

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
`;

const MonthTitle = styled.span`
  flex: 1;
  text-align: center;
`;

/**
 * Primary UI component for user interaction
 */
export const DatePicker = ({
  date = defaultDate,
  onChange,
  ...rest
}: DatePickerProps) => {
  const [luxonSelectedDay, setLuxonSelectedDay] = useState(
    DateTime.fromJSDate(date).startOf("day")
  );
  const [luxonSelectedMonth, setLuxonSelectedMonth] = useState(
    DateTime.fromJSDate(date).startOf("day")
  );

  const handleClickNext = () => {
    const nextLuxonMonth = luxonSelectedMonth.plus({ months: 1 });
    setLuxonSelectedMonth(nextLuxonMonth);
  };

  const handleClickBack = () => {
    const nextLuxonMonth = luxonSelectedMonth.minus({ months: 1 });
    setLuxonSelectedMonth(nextLuxonMonth);
  };

  const hanldeChange = ({ date }: DayArguments) => {
    setLuxonSelectedDay(DateTime.fromJSDate(date).startOf("day"));
    onChange?.({ date });
  };

  return (
    <Wrapper>
      <Header>
        <IconButton onClick={handleClickBack}>{"<"}</IconButton>
        <MonthTitle>{luxonSelectedMonth.toFormat("MMMM y")}</MonthTitle>
        <IconButton onClick={handleClickNext}>{">"}</IconButton>
      </Header>
      <MonthDays
        month={luxonSelectedMonth.toJSDate()}
        selected={luxonSelectedDay.toJSDate()}
        onChange={hanldeChange}
        {...rest}
      />
    </Wrapper>
  );
};
