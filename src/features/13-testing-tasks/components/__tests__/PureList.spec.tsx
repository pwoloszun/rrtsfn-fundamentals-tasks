import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureList, { IPureListProps } from '../PureList';

describe('PureList', () => {

  it('should render list item for each input item', async () => {
    const props = generateProps({
      renderItem: (item: any) => item.name
    });
    const { items } = props;
    renderComponent(props);

    const listItems = await screen.findAllByRole('listitem', { hidden: true });

    expect(listItems.length).toEqual(items.length);
    items.forEach((item, index) => {
      const listItemEl = listItems[index];
      expect(listItemEl).toHaveTextContent(item.name);
    });
    // expect(false).toEqual(true);
  });

  it('should emit onListClick event', async () => {
    const props = generateProps();
    const { onListClick } = props;
    renderComponent(props);

    const listEl = await screen.findByRole('list', { hidden: true });
    userEvent.click(listEl);

    expect(onListClick).toHaveBeenCalledTimes(1);
    expect(onListClick).toHaveBeenCalledWith(123);
    // expect(false).toEqual(true);
  });

});

type Props = IPureListProps<any>;

//TODO
function renderComponent(props: Props) {
  render(<PureList {...props} />);
}

function generateProps(props: Partial<Props> = {}): Props {
  const items = [
    { id: 100, secretIdentity: 'Peter Parker', name: 'Spider-Man' },
    { id: 200, secretIdentity: 'Bruce', name: 'Batman' },
    { id: 300, secretIdentity: 'Clark', name: 'Superman' },
  ];
  const renderItem = (item: any) => item.name;
  const onListClick = jest.fn();

  const defaultProps: Props = {
    items,
    renderItem,
    onListClick
  };

  return merge({}, defaultProps, props);
}
