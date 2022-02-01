import React from 'react';

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
    <ul>
      {
        items.map((item) => {
          return (
            <li key={item.id}>
              {render(item)}
            </li>
          );
        })
      }
    </ul>
  );
}
