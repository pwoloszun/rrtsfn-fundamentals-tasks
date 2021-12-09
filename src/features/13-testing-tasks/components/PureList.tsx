import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface IItem {
  id: number | string;
  [key: string]: any;
}

export interface IPureListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactElement | string;
  onListClick?: (n: number) => void;
}

export default function PureList<T extends IItem>(props: IPureListProps<T>): React.ReactElement {
  const { items, renderItem, onListClick } = props;

  const listClickHandler = () => {
    if (onListClick) {
      onListClick(123);
    }
  };

  return (
    <ListGroup role="list"
      variant="flush" as="ul" className="shadow" onClick={listClickHandler}>
      {
        items.map((item) => {
          return (
            <ListGroup.Item
              role="listitem"
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
