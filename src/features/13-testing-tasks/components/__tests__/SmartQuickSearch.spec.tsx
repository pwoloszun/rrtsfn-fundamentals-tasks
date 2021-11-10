import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { stubServerApi } from 'src/mocks/utils/server-stub';
import { waitForElToNotBeInDoc } from 'src/mocks/utils/helpers';
import { NbaPlayerDto } from 'src/api/dto/nba-player-dto';

import SmartQuickSearch from '../SmartQuickSearch';

describe('SmartQuickSearch', () => {

  fit('should render search field', async () => {
    // find quick search field by label

    // type some search query

    // "impl" communication with server side

    // should render spinner

    // wait for spinner to be removed

    // should render list items count eq to item entities received from server

    expect(false).toEqual(true);
  });

  xit('should render progress while waiting for response from server', async () => {
    expect(false).toEqual(true);
  });

});

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
