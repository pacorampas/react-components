import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('<Button />', () => {
  test('should print label text', async () => {
    const { getByRole } = render(<Button>Call to action</Button>)

    const button = getByRole('button')

    expect(button).toContainHTML('Call to action')
  })
})
