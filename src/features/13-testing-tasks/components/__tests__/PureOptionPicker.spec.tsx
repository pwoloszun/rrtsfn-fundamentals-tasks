import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  xit('should render input title', async () => {
    //TODO
  });

  xit('should render button for each input item', async () => {
    //TODO
  });

  xit('should not select button for undefined selectedItem prop', async () => {
    //TODO
  });

  xit('should select button for defined selectedItem prop', async () => {
    //TOOD
  });

  xit('should emit "onItemSelect" event on button click', async () => {
    //TODO
  });

});

type Props = IPureOptionPickerProps<any>;

function renderPureOptionPicker(props: Props) {
  return render(
    <PureOptionPicker {...props} />
  );
}

function generateComponentProps(props: Partial<Props> = {}, selectedItemIndex?: number): Props {
  const title = 'My Test Title';
  const items = [
    { id: 100, text: 'first item' },
    { id: 200, text: 'second item' },
    { id: 300, text: 'third item' },
    { id: 400, text: 'fourth item' },
    { id: 500, text: 'fifth item' },
  ];

  const selectedItem = selectedItemIndex ? items[selectedItemIndex] : null;

  const onItemSelect = jest.fn();

  const defaultInputs = { title, items, onItemSelect, selectedItem };
  return merge({}, defaultInputs, props);
}
