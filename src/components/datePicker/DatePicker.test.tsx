import React from 'react'
import { render, fireEvent } from 'test-utils'
import { VARIANT } from '../../theme'
import 'jest-styled-components'
import { DatePicker } from './DatePicker'
import { Day } from './components/Day'
import { MonthDays } from './components/MothDays'

describe('<DatePicker />', () => {
  test('should change the month title', async () => {
    const { getByRole, getByText } = render(<DatePicker selected={new Date('2022-09-01')} />)

    const buttonNext = getByRole('button', { name: />/i })
    const buttonBack = getByRole('button', { name: /</i })
    const monthTitle = getByText(/September/i)

    expect(monthTitle).toContainHTML('September 2022')
    fireEvent.click(buttonNext)

    expect(monthTitle).toContainHTML('October 2022')
    fireEvent.click(buttonBack)

    expect(monthTitle).toContainHTML('September 2022')
  })
  test('interaction', async () => {
    const onDummyChange = jest.fn()
    const { getByText } = render(<DatePicker selected={new Date('2022-09-01')} onChange={onDummyChange} />)
    const day15 = getByText(/15/i)

    fireEvent.click(day15)
    expect(onDummyChange).toHaveBeenCalledTimes(1)
  })
})

const renderDay = (props = {}) => {
  const { getByText, ...rest } = render(<Day {...props}>1</Day>)
  return { day: getByText('1'), getByText, ...rest }
}

describe('<Day />', () => {
  test('renders correctly', async () => {
    const { day } = renderDay()

    expect(day).toBeDefined()
    expect(day).toBeInTheDocument()
    expect(day).toHaveTextContent('1')
  })

  describe('with modifiers', () => {
    test('should render selected', async () => {
      const { day } = renderDay({ selected: true })

      expect(day).toMatchSnapshot()
    })

    test('should render no selected', async () => {
      const { day } = renderDay({ selected: false })

      expect(day).toMatchSnapshot()
    })

    test('should render with tabindex 0', async () => {
      const { day } = renderDay({ tabIndex: 0 })

      expect(day).toMatchSnapshot()
    })

    test('should render as out of month', async () => {
      const { day } = renderDay({ outOfMonth: true })

      expect(day).toMatchSnapshot()
    })

    Object.values(VARIANT).forEach((variant) => {
      test(`should render using ${variant}`, async () => {
        const { day } = renderDay({ variant })

        expect(day).toMatchSnapshot()
      })
    })
  })
})

const renderMonthDays = (props = {}) => {
  const { container, ...rest } = render(<MonthDays {...props} />)
  return { MonthDays: container, ...rest }
}

describe('<MonthDays />', () => {
  test('renders correctly', async () => {
    const { MonthDays } = renderMonthDays()

    expect(MonthDays).toBeDefined()
    expect(MonthDays).toBeInTheDocument()
  })
})
