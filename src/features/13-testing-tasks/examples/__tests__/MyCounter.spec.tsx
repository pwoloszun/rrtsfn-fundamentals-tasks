import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import MyCounter, { IMyCounterProps } from '../MyCounter';

describe('MyCounter', () => {

  beforeEach(() => {

  });

  it('should render passed value', async () => {
    const props = generateProps({
      value: 123
    });
    renderComponent(props);

    const headerEl = await screen.findByText(/Value:/i);

    expect(headerEl).toHaveTextContent(/Value: 123/i);
    // expect(false).toEqual(true);
  });

  fit('should emit onIncrement event on "Increment" btn click', () => {
    const props = generateProps();
    renderComponent(props);

    expect(false).toEqual(true);
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
  const onIncrement = () => { };
  const onDecrement = () => { };

  const defaultProps: IMyCounterProps = {
    value, onDecrement, onIncrement
  };

  return merge({}, defaultProps, props);
}
