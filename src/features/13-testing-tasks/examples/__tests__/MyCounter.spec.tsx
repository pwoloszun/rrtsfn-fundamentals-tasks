import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import MyCounter, { IMyCounterProps } from '../MyCounter';

describe('MyCounter', () => {

  it('should render passed value', async () => {
    const props = generateProps({
      value: 123
    });
    renderMyCounter(props);

    const valueEl = await screen.findByText(/Value/i);
    expect(valueEl).toHaveTextContent(/Value: 123/i);
  });

  it('should emit onIncrement event on "Increment" btn click', async () => {
    const props = generateProps();
    renderMyCounter(props);

    const incBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(incBtn);

    const { onIncrement } = props;

    expect(onIncrement).toHaveBeenCalledTimes(1);
    expect(onIncrement).toHaveBeenCalledWith();
  });

  it('RESTRICTED should emit onIncrement event on "Increment" btn click', async () => {
    const props = generateProps();
    renderMyCounter(props);

    const ctrlBtsnCont = await screen.findByRole('region', { name: /Upper Control Button/i, hidden: true });
    const incBtn = await within(ctrlBtsnCont).findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(incBtn);

    const { onIncrement } = props;

    expect(onIncrement).toHaveBeenCalledTimes(1);
    expect(onIncrement).toHaveBeenCalledWith();
  });

  xit('should emit onDecrement event on "Decrement" btn click', () => {
    expect(false).toEqual(true);
  });

});

function renderMyCounter(props: IMyCounterProps) {
  render(<MyCounter {...props} />);
}

function generateProps(props: Partial<IMyCounterProps> = {}): IMyCounterProps {
  const value = 100;
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();

  const defaultProps: IMyCounterProps = {
    value,
    onIncrement,
    onDecrement,
  };

  return merge({}, defaultProps, props);
}
