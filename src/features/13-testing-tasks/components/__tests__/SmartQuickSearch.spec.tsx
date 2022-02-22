import { render, screen, within, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/mocks/utils/server-stub';
import { waitForElToNotBeInDoc } from 'src/mocks/utils/helpers';
import { NbaPlayerDto } from 'src/api/dto/nba-player-dto';

import SmartQuickSearch from '../SmartQuickSearch';

describe('SmartQuickSearch', () => {

  xit('should render search field', async () => {
    expect(false).toEqual(true);
  });

  fit('should render progress while waiting for response from server', async () => {
    // render comp
    renderComponent();

    // type some search query
    const searchField = await screen.findByLabelText(/Search/i);

    const jsonData = generateEntitiesJson();
    stubServerApi.stub({
      method: 'get',
      path: `/api/players`,
      responseJson: jsonData
    });
    userEvent.type(searchField, 'smth');

    // spinner should apear
    const spinner = await screen.findByRole('status', { hidden: true });

    // spinner should disapear
    await waitForElementToBeRemoved(spinner);

    // should render 'Search results'
    await screen.findByText(/Search results/i);

    const resultsList = await screen.findByRole('list', { hidden: true });

    const resultItems = await within(resultsList).findAllByRole('listitem', { hidden: true });

    // check if within 'list' 'listitem' have beef rendered
    expect(resultItems.length).toEqual(jsonData.length);

    //    check if 'listitem' contain text base on data received from server
    jsonData.forEach((playerData, index) => {
      const { first_name, last_name } = playerData;
      const resultItem = resultItems[index];
      expect(resultItem).toHaveTextContent(`${last_name}, ${first_name}`);
    });
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
