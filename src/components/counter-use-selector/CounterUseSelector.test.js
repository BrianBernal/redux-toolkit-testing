import React from "react";
import { render, screen, cleanup, fireEvent } from "../../test-util";
import CounterUseSelector from "./CounterUseSelector";

afterEach(cleanup)

// Testing component that is connected to redux
describe('CounterConnect', () => {
  it("shows the current count", () => {
    render(
      <CounterUseSelector />,
      { initialState: { counter: { value: 20 } } },
    );
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});

// Crash course react min 30 https://www.youtube.com/watch?v=ZmVBCpefQe8
const initialState = { initialState: { counter: { value: 20 } } };

describe('There are inc and dec buttons', () => {
  it('Must contain a +, -, Add Amount button', () => {
    const { getByText } = render(<CounterUseSelector />, initialState);
    ['+', '-', 'Add Amount'].forEach(text => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });
});

describe('simulate events', () => {
  it('Simulate input ammount and + click event', () => {
    const { getByTestId, getByText } = render(<CounterUseSelector />, initialState);
    const ammountInput = getByTestId('incrementInput');
    fireEvent.change(ammountInput, { target: { value: '3' } });
    const ammountButton = getByText('Add Amount');
    fireEvent.click(ammountButton);
    expect(getByText('23')).toBeInTheDocument();
  });
  // TODO: add it functions to + and -
});

// TODO: Realizar el anterior ejercicio pero con user-event. (Tes-lib/user-event)

describe('Testing async events', () => {
  it('Update the ammoun with setTimeOut async way', async () => {
    const { findByText, getByText, getByTestId } = render(<CounterUseSelector />, initialState);
    const asyncButton = getByText('Add Async');
    const ammountInput = getByTestId('incrementInput');
    fireEvent.change(ammountInput, { target: { value: '3' } });
    fireEvent.click(asyncButton);
    await findByText('23');
  })
})
