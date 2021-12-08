import { render, screen } from '@testing-library/react';
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

  xit('should 3rd', async () => {
    expect(false).toEqual(true);
  });

});

function renderComponent(props: IMyCounterProps) {
  render(<MyCounter {...props} />);
}

function generateProps(props: Partial<IMyCounterProps> = {}): IMyCounterProps {
  const defaultProps: IMyCounterProps = {
    gggHhh: 'qq'
  };
  return merge({}, defaultProps, props);
}
