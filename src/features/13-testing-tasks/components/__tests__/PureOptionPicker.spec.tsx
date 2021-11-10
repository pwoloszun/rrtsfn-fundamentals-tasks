import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  it('should render input title; render button for each input item', async () => {
    const props = generateProps({
      title: 'My imba title',
      items: [
        { id: 100, text: 'my first' },
        { id: 200, text: 'my sec' },
        { id: 300, text: 'my third' },
      ]
    });
    renderComponent(props);

    await screen.findByText(/My imba title/i);

    await screen.findByText(/my first/i);
    await screen.findByText(/my sec/i);
    await screen.findByText(/my third/i);

    // const { items } = props;
    // for (const item of items) {
    //   await screen.findByText(item.text);
    // }
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
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];
  const defaultProps: Props = {
    items,
    onItemSelect: () => { },
    selectedItem: null,
    title: 'some test title'
  };
  return merge({}, defaultProps, props);
}


