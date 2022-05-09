import React from "react";
import {render, fireEvent, screen, getByTestId} from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculator from '../components/Calculator/Calculator.js'

test('User input returns result on screen', () => {
  render(<Calculator/>)

  fireEvent.change(screen.getByTestId('screen'), {target: {value: '2+2'}})

  expect(screen.getByTestId('result')).toHaveTextContent(4)
})

test('Clicking on a Memory button populates the screen and returns the result', () => {
  render(<Calculator/>)

  fireEvent.change(screen.getByTestId('screen'), {target: {value: '1+2'}})
  fireEvent.click(screen.getByTestId('savememory'))

  fireEvent.change(screen.getByTestId('screen'), {target: {value: '2+2'}})
  fireEvent.click(screen.getAllByTestId('memory')[screen.getAllByTestId('memory').length - 1])

  expect(screen.getByTestId('result')).toHaveTextContent(3)
  expect(screen.getByTestId('screen')).toHaveValue('1+2')
})

test('The save equation button is disabled when there is not user input', () => {
  render(<Calculator/>)

  fireEvent.change(screen.getByTestId('screen'), {target: {value: ''}})

  expect(screen.getByTestId('savememory')).toBeDisabled()
})

test('The save equation button is disabled when the input is similar to an existing memory', () => {
  render(<Calculator/>)

  fireEvent.change(screen.getByTestId('screen'), {target: {value: '3+2'}})
  fireEvent.click(screen.getByTestId('savememory'))

  expect(screen.getByTestId('savememory')).toBeDisabled()
})