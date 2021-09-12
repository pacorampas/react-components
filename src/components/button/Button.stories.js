import React from 'react'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '20px' }}>
        <Story />
      </div>
    ),
  ],
}

export const PrimaryButton = () => <Button>Click me!</Button>
