import React from 'react';

import styles from './DataTable.module.css';

interface DataTableItem {
  id: number | string;
  [key: string]: any;
}

export interface DataTableMetaData {
  value: string;
  text: string;
}

export interface DataTableProps<T> {
  items: T[];
  metaData: DataTableMetaData[];
  selectedItem?: T | null;
  onRowClick?: (item: T) => void;
}

export default function DataTable<T extends DataTableItem>(
  props: DataTableProps<T>
): React.ReactElement {
  const { items, onRowClick, selectedItem, metaData } = props;

  return (
    <table className={styles.list}>
      {
        <DataTableHead metaData={metaData} />
      }
      <tbody
        aria-label="rows"
        className={styles['items-container']}>
        {
          items.map((item) => {
            const isSelected = item === selectedItem;
            return (
              <DataTableRow
                key={item.id}
                item={item}
                isSelected={isSelected}
                metaData={metaData}
                onRowClick={onRowClick}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

interface IDataTableHeadProps {
  metaData: DataTableMetaData[];
}

function DataTableHead(props: IDataTableHeadProps) {
  const { metaData } = props;

  return (
    <thead className={styles['list-header']}>
      <tr aria-label="headers-row">
        {
          metaData.map((meta) => {
            return (
              <td key={meta.value as string}>
                <a href="#null">{meta.text}</a>
              </td>
            );
          })
        }
      </tr>
    </thead>
  );
}


interface IDataTableRowProps<T> {
  item: T;
  isSelected: boolean;
  metaData: DataTableMetaData[];
  onRowClick?: (item: T) => void;
}

const defaultOnRowClick = () => { };

function DataTableRow<T extends DataTableItem>(props: IDataTableRowProps<T>) {
  const { metaData, isSelected, item, onRowClick = defaultOnRowClick } = props;
  const rowClasses = [styles['list-item']];
  const ariaAttrs: any = {
    'aria-label': 'items-row'
  };
  if (isSelected) {
    rowClasses.push(styles['highlighted']);
    ariaAttrs['aria-label'] = 'selected-items-row';
  }

  const rowClickHandler = () => {
    onRowClick(item);
  };

  return (
    <tr key={item.id}
      onClick={rowClickHandler}
      className={rowClasses.join(' ')}
      {...ariaAttrs}>
      {
        metaData.map((meta) => {
          return (
            <td key={meta.value}>
              {(item as any)[meta.value]}
            </td>
          );
        })
      }
    </tr>
  );
}
