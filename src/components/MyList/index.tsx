import React from 'react';

import MyListItem from '../MyListItem';
import MySpinner from '../MySpinner';

import styles from './index.module.css';

const listCssClasses = [
  'list-group',
  styles.myList
].join(' ');

interface MyListProps {
  isLoading: boolean;
  items: any[];
  statuses: { [id: number]: string; };
  onRemove: Function;
  onEdit: Function;
  onSaveEdit: Function;
  onCancelEdit: Function;
};

export default class MyList extends React.Component<MyListProps> {
  render() {
    const { items, statuses, isLoading } = this.props;
    if (isLoading) {
      return (
        <div className="d-flex justify-content-center">
          <MySpinner size="large" />
        </div>
      );
    }

    const content = items.map((item: any, index: number) => {
      const { id } = item;
      return (
        <MyListItem
          key={id}
          item={item}
          status={statuses[id]}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
          onSaveEdit={this.handleSaveEdit}
          onCancelEdit={this.handleCancelEdit}
        />
      );
    });

    return (
      <div className={listCssClasses}>
        {content}
      </div>
    );
  }

  handleRemove = (item: any) => {
    const { onRemove } = this.props;
    onRemove(item);
  };

  handleEdit = (item: any) => {
    const { onEdit } = this.props;
    onEdit(item);
  };

  handleSaveEdit = (item: any, data: any) => {
    const { onSaveEdit } = this.props;
    onSaveEdit(item, data);
  };

  handleCancelEdit = (item: any) => {
    const { onCancelEdit } = this.props;
    onCancelEdit(item);
  };

}
