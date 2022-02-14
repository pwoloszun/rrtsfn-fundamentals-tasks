import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyCounter, { IMyCounterProps } from '../MyCounter';

describe('MyCounter', () => {

  xit('should render passed value', () => {
    expect(false).toEqual(true);
  });

  xit('should emit onIncrement event on "Increment" btn click', () => {
    expect(false).toEqual(true);
  });

  xit('should emit onDecrement event on "Decrement" btn click', () => {
    expect(false).toEqual(true);
  });

});

function renderMyCounter(props: IMyCounterProps) {
  return render(<MyCounter {...props} />);
}
