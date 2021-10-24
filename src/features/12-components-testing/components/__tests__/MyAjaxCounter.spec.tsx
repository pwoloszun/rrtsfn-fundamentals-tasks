import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterValueParams } from 'src/api/counter-api';
import { stubServerApi } from 'src/mocks/utils/server-stub';

import MyAjaxCounter from '../MyAjaxCounter';

describe('MyAjaxCounter.spec', () => {

  describe('defined initialValue', () => {

    it('should render initial value fetched from server', async () => {
      const id = 100;
      const initialValue = -99;
      mockServerGetCounterValueById(id, initialValue);

      render(<MyAjaxCounter />);

      screen.getByRole("spinbutton", { hidden: true });
      screen.getByText(/Value/);

      await waitForElementToBeRemoved(
        () => screen.queryByRole("spinbutton", { hidden: true }),
        { timeout: 2000 }
      );

      expect(screen.getByText(/Value/)).toHaveTextContent(`Value: ${initialValue}`);
    });

    describe('increment click', () => {
      it('should async increment value', async () => {
        const id = 100;
        const initialValue = 111;
        mockServerGetCounterValueById(id, initialValue);

        render(<MyAjaxCounter />);
        await waitForElementToBeRemoved(
          () => screen.getByRole("spinbutton", { hidden: true })
        );

        mockServerPatchCounterValueById(id, { value: initialValue + 1 });

        userEvent.click(screen.getByText('Increment'));
        await screen.findByRole("spinbutton", { hidden: true });
        await waitForElementToBeRemoved(
          () => screen.getByRole("spinbutton", { hidden: true })
        );

        expect(screen.getByText(/Value/)).toHaveTextContent(`Value: ${initialValue + 1}`);
      });
    });

    describe('decrement click', () => {
      it('should async decrement value', async () => {
        const id = 100;
        const initialValue = 123;
        mockServerGetCounterValueById(id, initialValue);

        render(<MyAjaxCounter />);
        await waitForElementToBeRemoved(
          () => screen.getByRole("spinbutton", { hidden: true })
        );

        mockServerPatchCounterValueById(id, { value: initialValue - 1 });

        userEvent.click(screen.getByText('Decrement'));
        await screen.findByRole("spinbutton", { hidden: true });
        await waitForElementToBeRemoved(
          () => screen.getByRole("spinbutton", { hidden: true })
        );

        expect(screen.getByText(/Value/)).toHaveTextContent(`Value: ${initialValue - 1}`);
      });
    });
  });

});

function mockServerGetCounterValueById(id: number, initialValue: number): void {
  stubServerApi.stub({
    method: 'get',
    path: `/api/counter-values/${id}`,
    responseJson: { id, value: initialValue }
  });
}

function mockServerPatchCounterValueById(id: number, params: CounterValueParams) {
  stubServerApi.stub({
    method: 'patch',
    path: `/api/counter-values/${id}`,
    responseJson: params
  });
}
