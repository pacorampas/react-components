import React from 'react'
import { Story } from '@storybook/react'
import CardComponent, { CardProps } from './Card'
import { VARIANT } from '../../theme'

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
  children: <p>I'm a parragraph</p>,
  variant: VARIANT.WHITE,
}
