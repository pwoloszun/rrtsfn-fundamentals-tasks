import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface IItem {
  id: number;
  text: string;
}

export interface IPureOptionPickerProps<T> {
  title: string;
  items: T[];
  selectedItem: T | null;
  onItemSelect: (item: T) => void;
}

export default function PureOptionPicker<T extends IItem>(
  props: IPureOptionPickerProps<T>
): React.ReactElement {
  const { items, onItemSelect, selectedItem, title } = props;
  return (
    <Card className="text-center shadow">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {
          items.map((item) => {
            const btnClickHandler = () => {
              onItemSelect(item);
            };
            const variant = item.id === selectedItem?.id ? 'primary' : 'secondary';
            const ariaAttrs = item.id === selectedItem?.id ? { 'aria-pressed': true } : {};
            const { id, text } = item;
            return (
              <Button {...ariaAttrs}
                key={id}
                onClick={btnClickHandler}
                variant={variant}
                className="mx-2">
                {text}
              </Button>
            );
          })
        }
      </Card.Body>
    </Card>
  );
}
