import React from 'react'
import { Story } from '@storybook/react'
import { Card as CardComponent } from '../Card'
import { VARIANT } from '../../../theme/theme.types'
import { CardProps } from '../Card.types'

export default {
  title: 'Components/Card',
  component: CardComponent,
  decorators: [
    (Story: any) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args: CardProps) => <CardComponent {...args} />

export const Card: Story<CardProps> = Template.bind({})
Card.args = {
  children: <p>I am a parragraph</p>,
  variant: VARIANT.PRIMARY,
}
