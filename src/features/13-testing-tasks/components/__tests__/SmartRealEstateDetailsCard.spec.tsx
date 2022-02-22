import { merge } from 'lodash';
import { render, screen, within, waitForElementToBeRemoved } from '@testing-library/react';

import { stubServerApi } from 'src/mocks/utils/server-stub';

import { RealEstate } from 'src/api/fetch-real-estates';

import SmartRealEstateDetailsCard, { ISmartRealEstateDetailsCardProps } from '../SmartRealEstateDetailsCard';

describe('SmartRealEstateDetailsCard', () => {

  it('should render fetched real estates data', async () => {
    const entityId = 100;
    const props = generateProps({ entityId });
    const jsonData = generateEntityJson(entityId);

    stubServerApi.stub({
      method: 'get',
      path: `/api/real-estates/${entityId}`,
      responseJson: jsonData,
      options: { delay: 500 }
    });
    const { street, price, type } = jsonData;

    renderComponent(props);

    const headerCont = await screen.findByRole('region', { name: /Card Header/i, hidden: true });
    expect(headerCont).toHaveTextContent(/Loading\.\.\./i);

    const bodyCont = await screen.findByRole('region', { name: /Card Body/i, hidden: true });
    const spinner = await within(bodyCont).findByRole('status', { hidden: true });

    await waitForElementToBeRemoved(spinner);

    const headerContAfterServerResp = await screen.findByRole('region', { name: /Card Header/i, hidden: true });
    expect(headerContAfterServerResp).toHaveTextContent(`Street Addr.: ${street}`);

    const bodyContAfterServerResp = await screen.findByRole('region', { name: /Card Body/i, hidden: true });
    expect(bodyContAfterServerResp).toHaveTextContent(`Price: ${price}`);
    expect(bodyContAfterServerResp).toHaveTextContent(`Type: ${type}`);
  });

  xit('should STRICTLY render loding info and fetched real estates data', async () => {
    expect(false).toEqual(true);
  });

  xit('should render loading info while waiting for async data', async () => {
    expect(true).toEqual(false);
  });

  xit('should render error message is error received from server', async () => {
    expect(true).toEqual(false);
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
