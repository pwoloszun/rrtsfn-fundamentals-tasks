import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MyCounter, { IMyCounterProps } from '../MyCounter';
import { merge } from 'lodash';

describe('MyCounter', () => {

  it('should render 0 as default value', async () => {
    const props = generateProps();
    renderComponent(props);

    const valueEl = await screen.findByText(/Value/i);

    expect(valueEl).toHaveTextContent(/Value: 0/i);
  });

  it('should render recdeived initialValue', async () => {
    const props = generateProps({
      initialValue: 123
    });
    renderComponent(props);

    const valueEl = await screen.findByText(/Value/i);

    expect(valueEl).toHaveTextContent(/Value: 123/i);
  });

  it('RESTRICTIVE should render recdeived initialValue', async () => {
    const props = generateProps({
      initialValue: 456
    });
    renderComponent(props);

    const counterValueRegion = await screen
      .findByRole('region', { name: /Counter Value/i, hidden: true });
    const valueEl = await within(counterValueRegion).findByText(/Value/i);
    expect(valueEl).toHaveTextContent(/Value: 456/i);
  });

  it('should increment value on "Increment" btn click', async () => {
    const props = generateProps({
      initialValue: 100
    });
    renderComponent(props);

    const incBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(incBtn);

    const valueEl = await screen.findByText(/Value/i);
    expect(valueEl).toHaveTextContent(/Value: 101/i);

    // expect(false).toEqual(true);
  });

});

function renderComponent(props: IMyCounterProps) {
  render(<MyCounter {...props} />);
}

function generateProps(props: Partial<IMyCounterProps> = {}): IMyCounterProps {
  const defaultProps: IMyCounterProps = {
  };
  return merge({}, defaultProps, props);
}
