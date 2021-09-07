import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { DatePicker } from './DatePicker'

describe('<DatePicker />', () => {
  test('should change the month title', async () => {
    const { getByRole, getByText } = render(<DatePicker date={new Date('2022-09-01')} />)

    const buttonNext = getByRole('button', { name: />/i })
    const buttonBack = getByRole('button', { name: /</i })
    const monthTitle = getByText(/September/i)

    expect(monthTitle).toContainHTML('September 2022')
    fireEvent.click(buttonNext)

    expect(monthTitle).toContainHTML('October 2022')
    fireEvent.click(buttonBack)

    expect(monthTitle).toContainHTML('September 2022')
  })
})
