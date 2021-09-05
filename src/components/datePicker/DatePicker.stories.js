import React from "react";
import { DatePicker } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
};

export const DatePickerMain = () => <DatePicker onChange={(d) => console.log(d)} />;
