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
  return (
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  );
}
