import React from 'react'
import { Story } from '@storybook/react'
import { Button as ButtonComponent, ButtonProps } from './Button'
import { VARIANT } from '../../theme/theme.types'

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args: ButtonProps) => <ButtonComponent {...args} />

export const Button: Story<ButtonProps> = Template.bind({})
Button.args = {
  children: 'Click me!',
  bordered: false,
  variant: VARIANT.PRIMARY,
  onClick: () => {
    console.log('Click!')
  },
}
