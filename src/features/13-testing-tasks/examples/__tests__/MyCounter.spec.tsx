import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyCounter, { IMyCounterProps } from '../MyCounter';

describe('MyCounter', () => {

  xit('should render initial value', () => {
    expect(false).toEqual(true);
  });

  xit('should increment value on increment click', () => {
    expect(false).toEqual(true);
  });

  xit('should decrement value on decrement click', () => {
    expect(false).toEqual(true);
  });

  xit('should render default value if undefined initialValue', () => {
    expect(false).toEqual(true);
  });

});

function renderMyCounter(props: IMyCounterProps) {
  return render(<MyCounter {...props} />);
}
