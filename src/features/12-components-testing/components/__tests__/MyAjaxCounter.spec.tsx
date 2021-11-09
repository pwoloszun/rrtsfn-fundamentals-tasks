import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CounterValueParams } from 'src/api/counter-api';
import { stubServerApi } from 'src/mocks/utils/server-stub';

import MyAjaxCounter from '../MyAjaxCounter';

describe('MyAjaxCounter', () => {

  xit('should render initial value fetched from server', async () => {
    expect(false).toEqual(true);
  });

  xit('should async increment value on increment click', async () => {
    expect(false).toEqual(true);
  });

  xit('should async decrement value on decrement click', async () => {
    expect(false).toEqual(true);
  });

});
