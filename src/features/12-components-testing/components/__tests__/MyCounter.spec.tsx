import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyCounter, { IMyCounterProps } from '../MyCounter';

function renderMyCounter(props: IMyCounterProps) {
  return render(<MyCounter {...props} />);
}

describe('MyCounter', () => {
  describe('defined initialValue', () => {

    it('should render initial value', () => {
      const initialValue = 123;
      renderMyCounter({ initialValue });
      expect(screen.getByText(/Value/)).toHaveTextContent(`Value: ${initialValue}`);
    });

    describe('increment click', () => {
      it('should increment value', () => {
        const initialValue = 123;
        renderMyCounter({ initialValue });

        userEvent.click(screen.getByText('Increment'));

        expect(screen.getByText(/Value/)).toHaveTextContent(`Value: ${initialValue + 1}`);
      });
    });

    describe('decrement click', () => {
      it('should decrement value', () => {
        const initialValue = 123;
        renderMyCounter({ initialValue });

        userEvent.click(screen.getByText('Decrement'));

        expect(screen.getByText(/Value/)).toHaveTextContent(`Value: ${initialValue - 1}`);
      });
    });
  });

  describe('undefined initialValue', () => {
    it('should render default value', () => {
      render(<MyCounter />);

      expect(screen.getByText(/Value/)).toHaveTextContent(`Value: 0`);
    });
  });

});
