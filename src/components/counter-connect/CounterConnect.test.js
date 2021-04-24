import React from "react";
import { render, screen } from "../../test-util";
import CounterConnect, { CounterConnectInner } from "./CounterConnect";

// Testing component that is not connected to redux
describe('CounterConnectInner', () => {
  it('shows the current count', () => {
    render(<CounterConnectInner count={20} />);
    expect(screen.queryByText("20")).toBeInTheDocument();
  });
});

describe('CounterConnect', () => {
  it('shows the current count', () => {
    render(<CounterConnect />, {
      initialState: { counter: { value: 20 } },
    });
    expect(screen.getByText("20")).toBeInTheDocument();
  });
});


