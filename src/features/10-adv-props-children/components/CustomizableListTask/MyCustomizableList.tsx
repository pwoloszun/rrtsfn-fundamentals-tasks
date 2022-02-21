import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

interface ItemEntity {
  id: string | number;
}

export interface IMyCustomizableListProps<T extends ItemEntity> {
  items: T[];
  render: (item: T) => React.ReactElement;
  selectedItem?: T | null;
  onItemClick?: (item: T) => void;
}

export default function MyCustomizableList<T extends ItemEntity>(
  props: IMyCustomizableListProps<T>
): React.ReactElement {
  const { items, render } = props;

  return (
    <ListGroup>
      {
        items.map((item) => {
          const isSelected = true; // TODO: calculate based on selectedItem prop

          return (
            <ListGroupItem key={item.id} active={isSelected}>
              {render(item)}
            </ListGroupItem>
          );
        })
      }
    </ListGroup>
  );
}
