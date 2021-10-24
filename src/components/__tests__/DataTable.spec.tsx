import {
  render,
  RenderResult,
  screen,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DataTable, { DataTableProps } from '../DataTable';

describe('DataTable', () => {
  describe('undefined selectedItem', () => {

    it('should render as many headers as specified in meta data', () => {
      const { items, metaData } = propsExample();
      renderDataTable({ items, metaData });

      const headers = getHeaders();

      expect(headers.length).toEqual(metaData.length);
    });

    it('should render headers with texts from meta data', () => {
      const { items, metaData } = propsExample();
      renderDataTable({ items, metaData });

      const headers = getHeaders();

      metaData.forEach((meta, i) => {
        const expectedText = meta.text;
        const header = headers[i];
        expect(header).toHaveTextContent(expectedText);
      });
    });

    it('should render as many rows as passed items', () => {
      const { items, metaData } = propsExample();
      renderDataTable({ items, metaData });
      const rows = getRows();
      expect(rows.length).toEqual(items.length);
    });

    it('should render each item data in separate row', () => {
      const { items, metaData } = propsExample();
      renderDataTable({ items, metaData });

      const rows = getRows();

      items.forEach((item, i) => {
        const row = rows[i];
        const expectedText = item.email;
        expect(row).toHaveTextContent(expectedText);
      });
    });

    it('should in each row render cells specified in meta data', () => {
      const { items, metaData } = propsExample();
      renderDataTable({ items, metaData });

      const rows = getRows();

      rows.forEach((row, i) => {
        const cells = getAllCellsFrom(row);
        cells.forEach((cell, j) => {
          const item = items[i];
          const propName = metaData[j].value as keyof typeof item;
          const expectedText = item[propName].toString();
          expect(cell).toHaveTextContent(expectedText);
        });
      });
    });

    it('should highlight no row', () => {
      const { items, metaData } = propsExample();
      renderDataTable({ items, metaData });
      expect(() => {
        getSelectedRow();
      }).toThrowError();
    });
  });

  describe('passed selectedItem', () => {

    it('should highlight exactly one row', () => {
      const { items, metaData } = propsExample();
      const selectedItem = items[1];

      renderDataTable({ items, metaData, selectedItem });
      const selectedRow = getSelectedRow();

      expect(selectedRow).toBeInTheDocument();
    });

    it('should highlight row by selectedItem', () => {
      const { items, metaData } = propsExample();
      const selectedItem = items[1];

      renderDataTable({ items, metaData, selectedItem });
      const selectedRow = getSelectedRow();

      const expectedText = selectedItem.email;
      expect(selectedRow).toHaveTextContent(expectedText);
    });
  });

  describe('row click', () => {
    it('should call passed event listener once', () => {
      const { items, metaData, onRowClick } = propsExample();
      renderDataTable({ items, metaData, onRowClick });

      const rows = getRows();
      userEvent.click(rows[1]);

      expect(onRowClick).toBeCalledTimes(1);
    });

    it('should call passed event listener with item corresponding to clicked row', () => {
      const index = 1;
      const { items, metaData, onRowClick } = propsExample();
      renderDataTable({ items, metaData, onRowClick });

      const rows = getRows();
      userEvent.click(rows[index]);

      const expectedItem = items[index];
      expect(onRowClick).toBeCalledWith(expectedItem);
    });
  });

});

function getHeaders(): HTMLElement[] {
  const headersRow = screen.getByRole('row', { name: /headers-row/, hidden: true });
  const { getAllByRole } = within(headersRow);
  return getAllByRole("cell", { hidden: true });
}

function getRows(): HTMLElement[] {
  return screen.getAllByRole('row', { name: /items-row/, hidden: true });
}

function getAllCellsFrom(row: HTMLElement): HTMLElement[] {
  const { getAllByRole } = within(row);
  return getAllByRole("cell", { hidden: true });
}

function getSelectedRow(): HTMLElement {
  return screen.getByRole('row', { name: /selected-items-row/, hidden: true });
}

function renderDataTable<T extends { id: number }>({
  items = [],
  selectedItem = undefined,
  metaData = [],
  onRowClick = undefined
}: DataTableProps<T>): RenderResult {
  return render(
    <DataTable
      items={items}
      selectedItem={selectedItem}
      metaData={metaData}
      onRowClick={onRowClick}
    />
  );
}

interface TestUser {
  id: number;
  name: string;
  email: string;
  login: string;
}

function propsExample(props: Partial<DataTableProps<TestUser>> = {}): DataTableProps<TestUser> {
  const items = props.items || [
    { id: 100, name: 'bob', email: 'bob@bb.bb', login: 'reddevil' },
    { id: 200, name: 'ed', email: 'ed@bb.bb', login: 'imba' },
    { id: 300, name: 'kate', email: 'kate@bb.bb', login: 'katie' },
  ];
  const metaData = props.metaData || [
    { text: 'User Emails', value: 'email' },
    { text: 'Full Name', value: 'name' },
  ];
  const onRowClick = jest.fn();
  return {
    items,
    metaData,
    onRowClick,
  };
}
