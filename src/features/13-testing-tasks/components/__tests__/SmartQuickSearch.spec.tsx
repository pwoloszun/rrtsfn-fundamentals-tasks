import { render, screen, waitForElementToBeRemoved, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/mocks/utils/server-stub';
import { waitForElToNotBeInDoc } from 'src/mocks/utils/helpers';
import { NbaPlayerDto } from 'src/api/dto/nba-player-dto';

import SmartQuickSearch from '../SmartQuickSearch';

describe('SmartQuickSearch', () => {

  it('should perfomr search on server side', async () => {
    renderComponent();

    const quickSearchField = await screen.findByLabelText(/Search/i);

    const entitiesJson = generateEntitiesJson();
    stubServerApi.stub({
      method: 'get',
      path: '/api/players',
      responseJson: entitiesJson,
    });

    // type some search query
    userEvent.type(quickSearchField, 'some search query');

    // should render spinner
    await screen.findAllByRole('status', { hidden: true });

    // wait for spinner to be removed
    await waitForElementToBeRemoved(
      () => screen.queryAllByRole('status', { hidden: true }),
      { timeout: 2000 }
    );

    const listItems = await screen.findAllByRole('listitem', { hidden: true });
    expect(listItems.length).toEqual(entitiesJson.length);

    // expect(false).toEqual(true);
  });

  it('RESTRICTIVE should perfomr search on server side', async () => {
    renderComponent();

    const quickSearchField = await screen.findByLabelText(/Search/i);

    const entitiesJson = generateEntitiesJson();
    stubServerApi.stub({
      method: 'get',
      path: '/api/players',
      responseJson: entitiesJson,
    });

    // type some search query
    userEvent.type(quickSearchField, 'some search query');

    // should render spinner
    await screen.findAllByRole('status', { hidden: true });

    // wait for spinner to be removed
    await waitForElementToBeRemoved(
      () => screen.queryAllByRole('status', { hidden: true }),
      { timeout: 2000 }
    );

    const list = await screen.findByRole('list', { hidden: true });
    const listItems = await within(list).findAllByRole('listitem', { hidden: true });
    expect(listItems.length).toEqual(entitiesJson.length);

    // expect(false).toEqual(true);
  });

});

function renderComponent() {
  render(<SmartQuickSearch />);
}

function generateEntitiesJson(): NbaPlayerDto[] {
  return [
    {
      "id": 14,
      "first_name": "Ike",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Anigbogu",
      "position": "C",
      "weight_pounds": null,
      "team_id": 12
    },
    {
      "id": 25,
      "first_name": "Ron",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Baker",
      "position": "G",
      "weight_pounds": null,
      "team_id": 20
    },
    {
      "id": 67,
      "first_name": "MarShon",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Brooks",
      "position": "G",
      "weight_pounds": null,
      "team_id": 15
    },
    {
      "id": 71,
      "first_name": "Lorenzo",
      "height_feet": null,
      "height_inches": null,
      "last_name": "Brown",
      "position": "G",
      "weight_pounds": null,
      "team_id": 28
    },
  ];
}
