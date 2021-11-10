import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import Counter, { CounterProps } from '../index';

describe('Couner comp', () => {

  fit('should render received vaue', async () => {
    const props = generateProps({ value: 123 });
    renderComponent(props);

    const valueContEl = await screen.findByText(/Value/i);
    expect(valueContEl).toHaveTextContent(/123/);

    const incBtn = await screen.findByRole(
      'button', { name: /Increment/i, hidden: true }
    );
    userEvent.click(incBtn);

    const { onIncrement } = props;
    expect(onIncrement).toBeCalledTimes(1);
    // expect(onIncrement).toBeCalledWith('a qq!');
  });

});

function generateProps(props: Partial<CounterProps> = {}): CounterProps {
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();
  const onReset = jest.fn();

  const defaultProps: CounterProps = {
    value: 9999,
    onIncrement,
    onDecrement,
    onReset,
  };
  return merge({}, defaultProps, props);
}

function renderComponent(props: CounterProps) {
  render(<Counter {...props} />);
}


