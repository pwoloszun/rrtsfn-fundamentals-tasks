import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterValueParams } from 'src/api/counter-api';
import { stubServerApi } from 'src/mocks/utils/server-stub';

import MyAjaxCounter from '../MyAjaxCounter';

describe('MyAjaxCounter', () => {

  it('should render initial value fetched from server', async () => {
    const value = 456;
    const json = generateJson(value);

    stubServerApi.stub({
      method: 'get',
      path: `/api/counter-values/100`,
      responseJson: json,
      options: {
        delay: 200
      }
    });
    renderComponent();

    const spinner = await screen.findByRole('spinbutton', { hidden: true });
    const incBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    expect(incBtn).toBeDisabled();

    await waitForElementToBeRemoved(spinner);
    expect(incBtn).toBeEnabled();
    await screen.findByText(/Value: 456/i);
  });





  xit('should async increment value on increment click', async () => {
    expect(false).toEqual(true);
  });

  xit('should async decrement value on decrement click', async () => {
    expect(false).toEqual(true);
  });

});

function renderComponent() {
  render(<MyAjaxCounter />);
}

function generateJson(value: number) {
  return { id: 100, value };
}
