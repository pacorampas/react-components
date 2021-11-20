import React from 'react'
import { Story } from '@storybook/react'
import { Input as InputComponent, InputProps } from './Input'

export default {
  title: 'Components/Input',
  component: InputComponent,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args: InputProps) => <InputComponent {...args} />

export const Input: Story<InputProps> = Template.bind({})
Input.args = {
  name: 'test',
  placeholder: 'Placeholder',
  defaultValue: 'Uncontrolled value',
}
