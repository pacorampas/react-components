import React from "react";
import { DatePicker } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
};

export const DatePickerMain = () => <DatePicker fillEmptyDays onChange={(d) => console.log(d)} />;
