import React from 'react'
import { Story } from '@storybook/react'
import { DatePicker as DatePickerComponent, DatePickerProps } from './DatePicker'
import { MonthDays as MonthDaysComponent, MonthDaysProps, DayArguments } from './components/MothDays'
import { Day as DayComponent, DayProps } from './components/Day'
import { VARIANT } from '../../theme/theme.types'

export default {
  title: 'Components/DatePicker',
  component: DatePickerComponent,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
}

const Template = (args: DatePickerProps) => <DatePickerComponent {...args} />

export const DatePicker: Story<DatePickerProps> = Template.bind({})

DatePicker.args = {
  variant: VARIANT.PRIMARY,
  fillEmptyDays: true,
}

Template.parameters = {
  jest: ['DatePicker.test.js'],
}

const TemplateMonth = (args: MonthDaysProps) => <MonthDaysComponent {...args} />

export const MonthDays: Story<MonthDaysProps> = TemplateMonth.bind({})
MonthDays.args = {
  variant: VARIANT.PRIMARY,
  daySelected: new Date(),
  monthSelected: new Date(),
  fillEmptyDays: false,
  onChange: (args: DayArguments) => console.log(args),
}

const TemplateDay = (args: DayProps) => (
  <div style={{ width: '30px', height: '30px', display: 'flex' }}>
    <DayComponent {...args} />
  </div>
)

export const Day: Story<DayProps> = TemplateDay.bind({})
Day.args = {
  children: 1,
  variant: VARIANT.PRIMARY,
  selected: true,
  outOfMonth: false,
}
