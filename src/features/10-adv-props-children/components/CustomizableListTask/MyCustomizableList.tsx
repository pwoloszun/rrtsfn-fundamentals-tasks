import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

interface ItemEntity {
  id: string | number;
}

export interface IMyCustomizableListProps<T extends ItemEntity> {
  items: T[];
  render: (item: T) => React.ReactElement;
}

export default function MyCustomizableList<T extends ItemEntity>(
  props: IMyCustomizableListProps<T>
): React.ReactElement {
  const { items, render } = props;

  return (
    <ListGroup>
      {
        items.map((item) => {
          return (
            <ListGroupItem key={item.id}>
              {render(item)}
            </ListGroupItem>
          );
        })
      }
    </ListGroup>
  );
}
