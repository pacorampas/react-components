import React from 'react'
import { render, fireEvent } from 'test-utils'
import 'jest-styled-components'
import { Button } from './Button'
import { VARIANT } from '../../theme'

const renderButton = (props = {}) => {
  const { getByRole, ...rest } = render(<Button {...props}>Call to action</Button>)
  return { button: getByRole('button'), getByRole, ...rest }
}

test('renders correctly', () => {
  const { button } = renderButton()
  expect(button).toBeDefined()
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Call to action')
})

describe('Button', () => {
  describe('with modifiers', () => {
    test('should render a bordered button', async () => {
      const { button } = renderButton({ bordered: true })

      expect(button).toMatchSnapshot()
    })

    test('should render a solid button', async () => {
      const { button } = renderButton({ bordered: false })

      expect(button).toMatchSnapshot()
    })

    Object.values(VARIANT).forEach((variant) => {
      test(`should render using ${variant}`, async () => {
        const { button } = renderButton({ variant })

        expect(button).toMatchSnapshot()
      })
    })
  })

  describe('with interaction', () => {
    test('trigger onClick prop when user clicks on the button', () => {
      const onDummyClick = jest.fn()
      const { button } = renderButton({ onClick: onDummyClick })

      fireEvent.click(button)
      expect(onDummyClick).toHaveBeenCalledTimes(1)
    })
  })
})
