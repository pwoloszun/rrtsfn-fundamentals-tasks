import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import MyCounter, { IMyCounterProps } from '../MyCounter';

describe('MyCounter', () => {

  it('should render initial value', async () => {
    const props = generateProps({ initialValue: 100 });
    renderComponent(props);

    const valueEl = await screen.findByText(/Value/i);

    expect(valueEl).toHaveTextContent(/Value: 100/i);
  });

  it('should emit onMyTest event on "Lucky" btn click', async () => {
    const props = generateProps({
      onMyTest: jest.fn()
    });
    const { onMyTest } = props;
    renderComponent(props);

    const luckyBtn = await screen.findByRole('button', { name: /Lucky Numbers/i, hidden: true });
    userEvent.click(luckyBtn);

    expect(onMyTest).toHaveBeenCalledTimes(1);
    expect(onMyTest).toHaveBeenCalledWith([123, 456]);
    // expect(true).toEqual(false);
  });

  it('should increment value on increment click', async () => {
    const props = generateProps({ initialValue: 100 });
    renderComponent(props);

    const incrementBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    userEvent.click(incrementBtn);

    const valueEl = await screen.findByText(/Value/i);
    expect(valueEl).toHaveTextContent(/Value: 101/i);
  });

  xit('should decrement value on decrement click', () => {
    expect(false).toEqual(true);
  });

  it('should render default value if undefined initialValue', async () => {
    const props = generateProps();
    renderComponent(props);

    const valueEl = await screen.findByText(/Value/i);

    expect(valueEl).toHaveTextContent(/Value: 0/i);
  });

  it('should increment using upper panel inc btn', async () => {
    const props = generateProps({ initialValue: 200 });
    renderComponent(props);

    const upperPanel = await screen.findByRole('region', { name: /Upper Panel/i, hidden: true });

    const incrementBtn = await within(upperPanel).findByRole('button', { name: /Other Inc/i, hidden: true });
    userEvent.click(incrementBtn);

    const valueEl = await screen.findByText(/Value/i);
    expect(valueEl).toHaveTextContent(/Value: 201/i);
  });


  fit('should check list', async () => {
    const props = generateProps();
    renderComponent(props);

    const listEl = await screen.findByRole('list', { hidden: true });

    const itemEls = await within(listEl).findAllByRole('listitem', { hidden: true });

    const expectedItems = ['a', 'b', 'd'];
    expect(itemEls.length).toEqual(3);
    expectedItems.forEach((expectedVal, i) => {
      const itemEl = itemEls[i];
      expect(itemEl).toHaveTextContent(expectedVal);
    });
  });

});

function renderComponent(props: IMyCounterProps) {
  return render(<MyCounter {...props} />);
}

function generateProps(props: Partial<IMyCounterProps> = {}): IMyCounterProps {
  const defaultProps: IMyCounterProps = {
  };
  return merge({}, defaultProps, props);
}
