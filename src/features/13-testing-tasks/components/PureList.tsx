import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface IItem {
  id: number | string;
  [key: string]: any;
}

export interface IPureListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactElement | string;
}

export default function PureList<T extends IItem>(props: IPureListProps<T>): React.ReactElement {
  const { items, renderItem } = props;

  return (
    <ListGroup variant="flush" as="ul" className="shadow">
      {
        items.map((item) => {
          return (
            <ListGroup.Item
              key={item.id}
              action
              as="li"
            >
              {renderItem(item)}
            </ListGroup.Item>
          );
        })
      }
    </ListGroup>
  );
}
