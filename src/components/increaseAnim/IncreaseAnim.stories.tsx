import React from 'react'
import { Story } from '@storybook/react'
import { VARIANT } from '../../theme/theme.types'
import { IncreaseAnim, IncreaseAnimProps, ANIM_STATUS } from './IncreaseAnim'

export default {
  title: 'Components/IncreaseAnim',
  component: IncreaseAnim,
  decorators: [
    (Story: any) => (
      <div style={{ position: 'relative', height: '100px', width: '40px' }}>
        <Story />
      </div>
    ),
  ],
}

const Template = (args: IncreaseAnimProps) => <IncreaseAnim {...args} />

export const BorderOut: Story<IncreaseAnimProps> = Template.bind({})
BorderOut.args = {
  status: ANIM_STATUS.PLAY,
  variant: VARIANT.PRIMARY,
}
