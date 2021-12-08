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
  const {
    items,
    renderItem,
    header,
    onRowClick,
    selectedItem
  } = props;

  return (
    <ListGroup variant="flush" as="ul">
      <ListGroup.Item variant="dark" as="li">
        {header}
      </ListGroup.Item>

      {
        items.map((item) => {
          const itemEl = renderItem(item);
          const itemClickHandler = () => {
            onRowClick(item);
          };
          const isActive = selectedItem?.id === item.id;

          return (
            <ListGroup.Item
              key={item.id}
              action
              active={isActive}
              as="li"
              onClick={itemClickHandler}
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

