import { render, screen, act, waitFor } from '@testing-library/react';

import AsyncTimerExample from '../AsyncTimerExample';

describe('AsyncTimerExample', () => {

  it('should render 100 as initial value', () => {
    render(<AsyncTimerExample />);
    expect(screen.getByText(/AsyncTimerExample/)).toHaveTextContent(`AsyncTimerExample: 100`);
  });

  xit('should render 200 asynchronously (slow ver.)', async () => {
    render(<AsyncTimerExample />);
    await waitFor(() => screen.getByText(/AsyncTimerExample: 200/), { timeout: 3000 });
    expect(screen.getByText(/AsyncTimerExample/)).toHaveTextContent(`AsyncTimerExample: 200`);
  });

  it('should render 200 asynchronously (STUBBED ver.)', async () => {
    // === stub timers: setTimout(), setInterval() ===
    jest.useFakeTimers();

    render(<AsyncTimerExample />);

    // === advance fake timers
    act(() => { // === IMPORTANT: use act() when React state will change ===
      jest.advanceTimersByTime(10_000);
      // jest.runAllTimers();
      // jest.runOnlyPendingTimers();
    });

    await waitFor(() => screen.getByText(/AsyncTimerExample: 200/));
    expect(screen.getByText(/AsyncTimerExample/)).toHaveTextContent(`AsyncTimerExample: 200`);

    // === restore stubbed timers ===
    jest.useRealTimers();
  });

});
