import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  it('should render received: title & buttons', async () => {
    const props = generateProps();
    const { title, items } = props;
    renderComponent(props);

    await screen.findByText(title);

    const allBtns = await screen.findAllByRole('button', { hidden: true });

    expect(allBtns.length).toEqual(items.length);
    items.forEach((item, index) => {
      const btnEl = allBtns[index];
      expect(btnEl).toHaveTextContent(item.text);
    });
  });

  it('should emit "onItemSelect" event on button click and pass related item', async () => {
    const props = generateProps();
    const { items, onItemSelect } = props;

    renderComponent(props);

    const selectedIndex = 2;
    const allBtns = await screen.findAllByRole('button', { hidden: true });
    const btnEl = allBtns[selectedIndex];

    userEvent.click(btnEl);

    expect(onItemSelect).toHaveBeenCalledTimes(1);
    const expecetdItem = items[selectedIndex];
    expect(onItemSelect).toHaveBeenCalledWith(expecetdItem);
  });

});

type Props = IPureOptionPickerProps<any>;

function renderComponent(props: Props) {
  render(<PureOptionPicker {...props} />);
}

function generateProps(props: Partial<Props> = {}): Props {
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];
  const title = "default test title";
  const onItemSelect = jest.fn();
  const selectedItem = null;

  const defaultProps: Props = {
    items,
    title,
    selectedItem,
    onItemSelect
  };
  return merge({}, defaultProps, props);
}

