import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  it('should render input title & button for each input item', async () => {
    const props = generateProps({
      title: 'My Options Title'
    });
    renderComponent(props);

    await screen.findByText(/My Options Title/i);

    const optionBtns = await screen.findAllByRole('button', { hidden: true });

    const { items } = props;

    expect(optionBtns.length).toEqual(items.length);

    items.forEach((item, index) => {
      const btn = optionBtns[index];
      expect(btn).toHaveTextContent(item.text);
    });
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
  render(<PureOptionPicker {...props} />);
}

function generateProps(props: Partial<Props> = {}): Props {
  const title = 'default test title';
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];
  const selectedItem = null;
  const onItemSelect = jest.fn();
  const defaulProps: Props = {
    title,
    items,
    selectedItem,
    onItemSelect,
  };
  return merge({}, defaulProps, props);
}


