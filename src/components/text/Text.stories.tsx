import React from 'react'
import { Story } from '@storybook/react'
import TextComponent, { TextProps } from './Text'
import { VARIANT } from '../../theme'

export default {
  title: 'Components/Text',
  component: TextComponent,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args: TextProps) => <TextComponent {...args} />

export const Text: Story<TextProps> = Template.bind({})
Text.args = {
  children: "I'm a parragraph",
  variant: VARIANT.PRIMARY,
}
