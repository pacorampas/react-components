import React from "react";
import styled from "styled-components";
import { DateTime } from "luxon";

interface DayProps {
  selected?: boolean;
  outOfMont?: boolean;
  tabIndex: string | number;
}

export type DayArguments = {
  day: number;
  ts: number;
  date: Date;
  prevMonth: boolean;
  nextMonth: boolean;
};

export interface MonthDaysProps {
  selected?: Date;
  month?: Date;
  fillEmptyDays?: boolean;
  onChange?: (arg: DayArguments) => void;
}

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: solid 1px;
`;

const Row = styled.div`
  display: flex;
`;

const Day = styled.button.attrs(({ tabIndex = -1 }: DayProps) => {
  return { tabIndex };
})`
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
  opacity: ${({ outOfMont }: DayProps) => (outOfMont ? "0.5" : "1")};
  background: ${({ selected }: DayProps) => (selected ? "#eee" : "none")};
`;

const defaultDate = new Date();

export const MonthDays = ({
  selected = defaultDate,
  month,
  fillEmptyDays = false,
  onChange = undefined,
}: MonthDaysProps) => {
  const luxonDate = DateTime.fromJSDate(month || selected).startOf("day");
  const luxonSelectedDate = DateTime.fromJSDate(selected).startOf("day");
  const firstDayOfMonth = luxonDate.set({ day: 1 });
  const lastDayOfMonth = luxonDate.set({ day: firstDayOfMonth.daysInMonth });

  const renderDays = () => {
    const fillMonthBeforeWith = firstDayOfMonth.weekday;
    const totalDaysInMonth = luxonDate.daysInMonth;
    const fillMonthAfterWith = 7 - lastDayOfMonth.weekday;

    const daysArray = [];
    let i = 1;
    while (i < fillMonthBeforeWith) {
      const diff = fillMonthBeforeWith - i;
      const date = firstDayOfMonth.minus({ days: diff });
      daysArray.push({
        ts: date.toFormat("x"),
        day: date.day,
        date: date.toJSDate(),
        prevMonth: true,
        nextMonth: false,
      });
      i += 1;
    }

    i = 0;
    while (i < totalDaysInMonth) {
      const date = firstDayOfMonth.plus({ days: i });
      daysArray.push({
        ts: date.toFormat("x"),
        day: date.day,
        date: date.toJSDate(),
        prevMonth: false,
        nextMonth: false,
      });
      i += 1;
    }

    i = 1;
    while (i <= fillMonthAfterWith) {
      const date = lastDayOfMonth.plus({ days: i });
      daysArray.push({
        ts: date.toFormat("x"),
        day: date.day,
        date: date.toJSDate(),
        prevMonth: false,
        nextMonth: true,
      });
      i += 1;
    }

    return daysArray;
  };

  const daysInRows = ({ daysToRender }: { daysToRender: any[] }) => {
    const rows: { [key: number]: any[] } = {};
    let rowIndex: number = -1;
    daysToRender.forEach((day, i) => {
      if (i % 7 === 0) {
        rowIndex += 1;
      }

      if (!rows[rowIndex]) {
        rows[rowIndex] = [];
      }

      rows[rowIndex].push(day);
    });

    return rows;
  };

  const daysToRender = renderDays();
  const rows = daysInRows({ daysToRender });

  const handleDayClick = function (this: DayArguments) {
    onChange?.(this);
  };

  return (
    <Wrapper>
      {Object.keys(rows).map((key: any) => {
        const row = rows[key];
        return (
          <Row key={key}>
            {row.map((day: DayArguments) => {
              const isOutDay = day.prevMonth || day.nextMonth;

              if (!fillEmptyDays && isOutDay) {
                return <Day key={day.ts} disabled />;
              }

              return (
                <Day
                  key={day.ts}
                  selected={
                    luxonSelectedDate.toMillis() ===
                    DateTime.fromJSDate(day.date).startOf("day").toMillis()
                  }
                  outOfMont={day.prevMonth || day.nextMonth}
                  onClick={handleDayClick.bind(day)}
                >
                  {day.day}
                </Day>
              );
            })}
          </Row>
        );
      })}
    </Wrapper>
  );
};
