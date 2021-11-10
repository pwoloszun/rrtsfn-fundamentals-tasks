import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterValueEntity, CounterValueParams } from 'src/api/counter-api';
import { stubServerApi } from 'src/mocks/utils/server-stub';

import MyAjaxCounter from '../MyAjaxCounter';

describe('MyAjaxCounter.spec', () => {

  fit('sould TODO', async () => {
    const exectedCounterEntity: CounterValueEntity = {
      id: 100,
      value: 456
    };
    stubServerApi.stub({
      method: 'get',
      path: '/api/counter-values/100',
      responseJson: exectedCounterEntity,
      options: { delay: 200 }
    });

    renderComponent();

    const valElBefore = await screen.findByText(/Value/i);
    expect(valElBefore).toHaveTextContent(/Value:$/i);

    await screen.findByRole('spinbutton', { hidden: true });

    await waitForElementToBeRemoved(
      () => screen.queryByRole('spinbutton', { hidden: true }),
      { timeout: 2000 }
    );

    const valEl = await screen.findByText(/Value/i);
    expect(valEl).toHaveTextContent(/456/i);


    // expect(false).toEqual(true);
  });

});

function renderComponent() {
  render(<MyAjaxCounter />)
}
