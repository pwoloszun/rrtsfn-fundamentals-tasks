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
  const { items, render, selectedItem, onItemClick } = props;

  return (
    <ListGroup>
      {
        items.map((item) => {
          const isSelected = selectedItem?.id === item.id; // TODO: calculate based on selectedItem prop
          const itemClickHandler = () => {
            if (onItemClick) {
              onItemClick(item);
            }
          };
          return (
            <ListGroupItem key={item.id} active={isSelected} onClick={itemClickHandler}>
              {render(item)}
            </ListGroupItem>
          );
        })
      }
    </ListGroup>
  );
}
