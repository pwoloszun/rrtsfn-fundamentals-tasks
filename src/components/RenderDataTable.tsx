import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface DataTableItem {
  id: number | string;
  [key: string]: any;
}

interface IRenderDataTableProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
  header: React.ReactElement;
  selectedItem: T | null;
  onRowClick: (item: T) => void;
}

export default function RenderDataTable<T extends DataTableItem>(
  props: IRenderDataTableProps<T>
): React.ReactElement {

  const { items, renderItem } = props;
  // TODO 1: render items
  // TODO 2: render header
  // TODO 3: emit onRowClick event
  // TODO 3: highlight (active={true}) list row for selectedItem

  return (
    <ListGroup variant="flush" as="ul">
      <ListGroup.Item variant="dark" as="li">
        HEADER_PLACEHODER
      </ListGroup.Item>

      {
        items.map((item) => {
          const itemEl = renderItem(item);
          return (
            <ListGroup.Item
              key={item.id}
              action
              active={false}
              as="li"
            >
              {itemEl}
            </ListGroup.Item>
          );
        })
      }

    </ListGroup>
  );
}

{/* <React.Fragment></React.Fragment> */ }

