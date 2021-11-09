import { screen, render } from '@testing-library/react';
import { merge } from 'lodash';

import Counter, { CounterProps } from '../index';

describe('Couner comp', () => {

  fit('should render received vaue', async () => {
    const props = generateProps({ value: 123 });
    renderComponent(props);

    const valueContEl = await screen.findByText(/Value/i);

    expect(valueContEl).toHaveTextContent(/123/);
  });

  xit('should TODO2', () => {
    const props = generateProps();
    renderComponent(props);

    expect(false).toEqual(true);
  });

  xit('should TODO3', () => {
    const props = generateProps();
    renderComponent(props);

    expect(false).toEqual(true);
  });

});

function renderComponent(props: CounterProps) {
  render(<Counter {...props} />);
}

function generateProps(props: Partial<CounterProps> = {}): CounterProps {
  const defaultProps = {
    value: 9999,
  };
  return merge({}, defaultProps as CounterProps, props);
}
