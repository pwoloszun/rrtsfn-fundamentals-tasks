import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterValueParams } from 'src/api/counter-api';
import { stubServerApi } from 'src/mocks/utils/server-stub';

import MyAjaxCounter from '../MyAjaxCounter';

describe('MyAjaxCounter', () => {

  fit('should render initial value fetched from server', async () => {
    const counterValueEntity = { id: 123, value: 456 };
    stubServerApi.stub({
      method: 'get',
      path: `/api/counter-values/100`,
      responseJson: counterValueEntity,
      options: { delay: 800 }
    });

    renderComponent();

    const spinner = await screen.findByRole('spinbutton', { hidden: true });

    const incBtn = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    expect(incBtn).toBeDisabled();
    const decBtn = await screen.findByRole('button', { name: /Decrement/i, hidden: true });
    expect(decBtn).toBeDisabled();

    await waitForElementToBeRemoved(spinner);

    const incBtnAfterDataFetched = await screen.findByRole('button', { name: /Increment/i, hidden: true });
    expect(incBtnAfterDataFetched).toBeEnabled();
    const decBtnAfter = await screen.findByRole('button', { name: /Decrement/i, hidden: true });
    expect(decBtnAfter).toBeEnabled();

    const valueCont = await screen.findByText(/Value:/i);
    expect(valueCont).toHaveTextContent(/Value: 456/i);

    // expect(false).toEqual(true);
  });

  xit('should async increment value on increment click', async () => {
    expect(false).toEqual(true);
  });

  xit('should async decrement value on decrement click', async () => {
    expect(false).toEqual(true);
  });

});

function renderComponent() {
  return render(<MyAjaxCounter />);
}
