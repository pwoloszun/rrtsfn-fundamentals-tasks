import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import MyCounter, { IMyCounterProps } from '../MyCounter';

describe('MyCounter', () => {

  it('should render passed value', async () => {
    const props = generateProps({
      value: 123
    });
    renderComponent(props);

    const headerEl = await screen.findByText(/Value:/i);

    expect(headerEl).toHaveTextContent(/Value: 123/i);
  });

  it('should emit onIncrement event on "Increment" btn click', async () => {
    const props = generateProps();
    renderComponent(props);
    const { onIncrement } = props;

    const controlsCont = await screen.findByRole('region', { name: /Counter Controls/i, hidden: true });

    // const btnEl = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    const btnEl = await within(controlsCont).findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(btnEl);

    expect(onIncrement).toHaveBeenCalledTimes(1);
    expect(onIncrement).toHaveBeenCalledWith();
  });

  xit('should emit onDecrement event on "Decrement" btn click', () => {
    expect(false).toEqual(true);
  });

});

// test helper
function renderComponent(props: IMyCounterProps) {
  return render(<MyCounter {...props} />);
}

function generateProps(props: Partial<IMyCounterProps> = {}): IMyCounterProps {
  const value = 456;
  const onIncrement = jest.fn();
  const onDecrement = jest.fn();

  const defaultProps: IMyCounterProps = {
    value, onDecrement, onIncrement
  };

  return merge({}, defaultProps, props);
}
