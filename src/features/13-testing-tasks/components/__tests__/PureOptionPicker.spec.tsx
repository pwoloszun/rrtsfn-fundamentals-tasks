import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  fit('should render option picker with title and options', async () => {
    const props = generateProps();
    const { title, items, onItemSelect } = props;
    renderComponent(props);

    await screen.findByText(title);

    const optionBtns = await screen.findAllByRole('button', { hidden: true });

    expect(optionBtns.length).toEqual(items.length);

    items.forEach((item, i) => {
      const btnEl = optionBtns[i];
      expect(btnEl).toHaveTextContent(item.text);
    });

    const index = 2;
    const btn = optionBtns[index];
    userEvent.click(btn);

    expect(onItemSelect).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith(items[index]);
  });

  xit('should render button for each input item', async () => {
    expect(false).toEqual(true);
  });

  xit('should not select button for undefined selectedItem prop', async () => {
    expect(false).toEqual(true);
  });

  xit('should select button for defined selectedItem prop', async () => {
    expect(false).toEqual(true);
  });

  xit('should emit "onItemSelect" event on button click', async () => {
    expect(false).toEqual(true);
  });

});

type Props = IPureOptionPickerProps<any>;

function renderComponent(props: Props) {
  return render(<PureOptionPicker {...props} />);
}

function generateProps(props: Partial<Props> = {}): Props {
  const title = 'some test title';
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];
  const selectedItem = null;
  const onItemSelect = jest.fn();

  const defaultProps: Props = {
    title,
    items,
    selectedItem,
    onItemSelect
  };
  return merge({}, defaultProps, props);
}


