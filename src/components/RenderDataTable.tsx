import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface DataTableItem {
  id: number | string;
  [key: string]: any;
}

interface IRenderDataTableProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactElement;
  header?: React.ReactElement;
  selectedItem?: T | null;
  onRowClick?: (item: T) => void;
}

export default function RenderDataTable<T extends DataTableItem>(
  props: IRenderDataTableProps<T>
): React.ReactElement {
  const { items, selectedItem, onRowClick = defaultOnRowClick, renderItem, header } = props;
  const isHeader = !!header;

  return (
    <ListGroup variant="flush" as="ul">
      {
        isHeader && <ListGroup.Item variant="dark" as="li">
          {header}
        </ListGroup.Item>
      }
      {
        items.map((item) => {
          const isSelected = item.id === selectedItem?.id;
          const rowClickHandler = () => {
            onRowClick(item);
          };

          return (
            <ListGroup.Item
              key={item.id}
              onClick={rowClickHandler}
              action
              active={isSelected}
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

function defaultOnRowClick() {
  // do nothing
}
