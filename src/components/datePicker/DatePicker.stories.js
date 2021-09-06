import React from "react";
import { DatePicker as DatePickerComponent } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePickerComponent,
  parameters: {
    backgrounds: {
      values: [
        { name: "red", value: "#f00" },
        { name: "green", value: "#0f0" },
        { name: "blue", value: "#00f" },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: "100px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <DatePickerComponent {...args} />;

export const DatePicker = Template.bind({});

DatePicker.args = {
  fillEmptyDays: true,
};

Template.parameters = {
  jest: ["DatePicker.test.js"],
};
