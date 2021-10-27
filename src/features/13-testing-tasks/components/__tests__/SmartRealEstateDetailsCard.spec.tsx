import { merge } from 'lodash';
import { render, screen, within } from '@testing-library/react';

import { waitForElToNotBeInDoc } from 'src/mocks/utils/helpers';
import { stubServerApi } from 'src/mocks/utils/server-stub';

import { RealEstate } from 'src/api/fetch-real-estates';

import SmartRealEstateDetailsCard, { ISmartRealEstateDetailsCardProps } from '../SmartRealEstateDetailsCard';

describe('SmartRealEstateDetailsCard', () => {

  xit('should render fetched real estates data', async () => {
    //TODO
  });

  xit('should STRICTLY render loding info and fetched real estates data', async () => {
    //TODO
  });

});

type Props = ISmartRealEstateDetailsCardProps;

function renderComponent(props: Props) {
  return render(
    <SmartRealEstateDetailsCard {...props} />
  );
}

function generateProps(props: Partial<Props> = {}): Props {
  const entityId = 10;
  const defaultProps = { entityId };
  return merge({}, defaultProps, props);
}

function generateEntityJson(id: number): RealEstate {
  return {
    id,
    "builtAt": "Sun Mar 12 2007 16:11:54 GMT+0100 (CET)",
    "lat": 53.997123,
    "lng": 20.230891,
    "price": 997.997,
    "street": "Sezam St.",
    "type": "COM"
  };
}
