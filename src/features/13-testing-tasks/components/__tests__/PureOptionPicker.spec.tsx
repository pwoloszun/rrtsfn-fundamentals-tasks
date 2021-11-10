import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  fit('should render input title; render button for each input item', async () => {
    // render comp

    // find rendered title

    // for each item find rendered item.text

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

// TODO

// const items = [
//   { id: 100, text: 'first item' },
//   { id: 200, text: 'second item' },
//   { id: 300, text: 'third item' },
//   { id: 400, text: 'fourth item' },
//   { id: 500, text: 'fifth item' },
// ];
