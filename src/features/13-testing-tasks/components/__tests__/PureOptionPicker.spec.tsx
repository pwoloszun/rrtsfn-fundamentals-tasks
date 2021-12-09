import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  xit('should render received: title & buttons', async () => {
    expect(false).toEqual(true);
  });

  xit('should emit "onItemSelect" event on button click and pass related item', async () => {
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
