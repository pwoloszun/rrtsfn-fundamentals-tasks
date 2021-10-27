import { render, screen } from '@testing-library/react';
import { merge } from 'lodash';

import PureList, { IPureListProps } from '../PureList';

describe('PureList', () => {

  xit('should render list item for each input item', async () => {
    const props = generateProps();
    //TODO
  });
});

type Props = IPureListProps<any>;

function renderComponent(props: Props) {
  return render(
    <PureList {...props} />
  );
}

function generateProps(props: Partial<Props> = {}): Props {
  const items = [
    { id: 100, secretIdentity: 'Peter Parker', name: 'Spider-Man' },
    { id: 200, secretIdentity: 'Bruce', name: 'Batman' },
    { id: 300, secretIdentity: 'Clark', name: 'Superman' },
  ];
  const renderItem = (item: any) => {
    return (
      <>
        <h4>{item.name}</h4>
        <small>Real name: {item.secretIdentity}</small>
      </>
    );
  };
  const defaultInputs = { items, renderItem };
  return merge({}, defaultInputs, props);
}

function getAllListItems() {
  return screen.getAllByRole('listitem', { hidden: true });
}
