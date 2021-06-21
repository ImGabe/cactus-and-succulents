import React from 'react'

import { render, screen } from '@testing-library/react'
import App from './App'

/* global test, expect */

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Cactus and Succulents/i)
  expect(linkElement).toBeInTheDocument()
})
