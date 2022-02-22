import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { merge } from 'lodash';

import PureOptionPicker, { IPureOptionPickerProps } from '../PureOptionPicker';

describe('PureOptionPickerComponent', () => {

  it('should render input title', async () => {
    const props = generateProps({
      title: 'Batman!!'
    });
    renderComponent(props);

    await screen.findByText(/Batman!!/i);
  });

  it('should render button for each input item', async () => {
    const props = generateProps();
    renderComponent(props);
    const { items } = props;

    const optionButtons = await screen.findAllByRole('button', { hidden: true });

    expect(optionButtons.length).toEqual(items.length);
    items.forEach((item, index) => {
      const optionBtn = optionButtons[index];
      expect(optionBtn).toHaveTextContent(item.text);
    });
  });

  xit('should not select button for undefined selectedItem prop', async () => {
    expect(false).toEqual(true);
  });

  xit('should select button for defined selectedItem prop', async () => {
    expect(false).toEqual(true);
  });

  it('should emit "onItemSelect" event on button click', async () => {
    const props = generateProps();
    renderComponent(props);
    const { onItemSelect, items } = props;
    const clickIndex = 2;

    const optionButtons = await screen.findAllByRole('button', { hidden: true });
    const clickedOptionBtn = optionButtons[clickIndex];
    userEvent.click(clickedOptionBtn);

    expect(onItemSelect).toHaveBeenCalledTimes(1);
    const expectedItem = items[clickIndex];
    expect(onItemSelect).toHaveBeenCalledWith(expectedItem);
  });

});

type Props = IPureOptionPickerProps<any>;

function renderComponent(props: Props) {
  return render(
    <PureOptionPicker {...props} />
  );
}

function generateProps(props: Partial<Props> = {}): Props {
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
    title: 'some test title',
    items,
    selectedItem,
    onItemSelect,
  };

  return merge({}, defaultProps, props);
}
