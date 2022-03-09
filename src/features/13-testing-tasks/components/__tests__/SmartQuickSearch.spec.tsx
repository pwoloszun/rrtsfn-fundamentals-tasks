import { render, screen, within, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/mocks/utils/server-stub';
import { waitForElToNotBeInDoc } from 'src/mocks/utils/helpers';
import { NbaPlayerDto } from 'src/api/dto/nba-player-dto';

import SmartQuickSearch from '../SmartQuickSearch';

describe('SmartQuickSearch', () => {

  it('should fetch and render entities from server', async () => {
    renderComponent();

    const json = generateEntitiesJson();
    stubServerApi.stub({
      method: 'get',
      path: `/api/players`,
      responseJson: json,
      options: { delay: 200 }
    });

    const searchField = await screen.findByLabelText(/Search/i);
    userEvent.type(searchField, 'my search query');

    const spinner = await screen.findByRole('status', { hidden: true });
    await waitForElementToBeRemoved(spinner);

    await screen.findByText(/Search results/i);

    const searchResultList = await screen.findByRole('list', { hidden: true });
    const resultItems = await within(searchResultList).findAllByRole('listitem', { hidden: true });

    expect(resultItems.length).toEqual(json.length);
    json.forEach((playerDto, index) => {
      const item = resultItems[index];
      expect(item).toHaveTextContent(`${playerDto.last_name}, ${playerDto.first_name}`);
    });
  });

  xit('should render progress while waiting for response from server', async () => {
    expect(false).toEqual(true);
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
