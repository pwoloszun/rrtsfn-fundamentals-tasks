import React from 'react';

import { ITEM_STATUS } from '../MyList/item-status';
import MySpinner from '../MySpinner';

import styles from './index.module.css';

const listCssClasses = [
  'list-group-item',
  styles.myListItem
].join(' ');

const statusLabels = {
  [ITEM_STATUS.saving]: 'Saving...',
  [ITEM_STATUS.removing]: 'Removing...',
};

const disabledStatuses = [
  ITEM_STATUS.saving,
  ITEM_STATUS.removing,
  ITEM_STATUS.editing,
];

export default class MyListItem extends React.Component<any> {
  private titleRef: any;
  private descriptionRef: any;

  constructor(props: any) {
    super(props);
    this.titleRef = React.createRef();
    this.descriptionRef = React.createRef();
  }

  render() {
    return (
      <div className={listCssClasses}>
        <div className="d-flex flex-column">
          {this.renderByStatus()}
        </div>
      </div>
    );
  }


  renderByStatus() {
    const { status } = this.props;
    switch (status) {
      case ITEM_STATUS.editing: {
        return this.renderEditing();
      }
      case ITEM_STATUS.persisted:
      case ITEM_STATUS.saving:
      case ITEM_STATUS.removing: {
        return this.renderDefault();
      }
      default: {
        throw new Error(`Unknown status: ${status}`);
      }
    }
  }

  renderDefault() {
    const { item, status } = this.props;
    const label = statusLabels[status];
    const isDisabled = disabledStatuses.includes(status);
    let statusContent = null;
    if (isDisabled) {
      statusContent = (
        <React.Fragment>
          <div className="w-75">
            <MySpinner size="small" text={label} />
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className="d-flex flex-row w-100 justify-content-between">
          <h6 className={`w-50 font-weight-bold ${isDisabled ? styles.disabled : null}`}>
            {item.title}
          </h6>
          <div className="w-25">
            {statusContent}
          </div>
          <div className="w-25 btn-group" role="group">
            <button onClick={this.handleEdit}
              disabled={isDisabled}
              type="button" className="btn btn-sm btn-info"
            >
              Edit
            </button>
            <button onClick={this.handleRemove}
              disabled={isDisabled}
              type="button" className="btn btn-sm btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
        <small className={isDisabled ? styles.disabled : undefined}>{item.description}</small>
      </React.Fragment>
    );
  }

  renderEditing() {
    const { item } = this.props;
    return (
      <form className="d-flex flex-row justify-content-around">
        <div className="form-group">
          <input ref={this.titleRef}
            defaultValue={item.title}
            type="text" className="form-control form-control-sm" placeholder="Edit title" />
        </div>
        <div className="form-group">
          <input ref={this.descriptionRef}
            defaultValue={item.description}
            type="text" className="form-control form-control-sm" placeholder="Edit description" />
        </div>
        <div>
          <button onClick={this.handleSaveEdit}
            className="btn btn-sm btn-primary">Save
          </button>
          <button onClick={this.handleCancelEdit}
            className="btn btn-sm btn-secondary">Cancel
          </button>
        </div>
      </form>
    );
  }

  handleRemove = () => {
    const { onRemove, item } = this.props;
    onRemove(item);
  };

  handleEdit = () => {
    const { onEdit, item } = this.props;
    onEdit(item);
  };

  handleSaveEdit = (event: any) => {
    event.preventDefault();
    const { onSaveEdit, item } = this.props;
    const data = {
      title: this.titleRef.current.value,
      description: this.descriptionRef.current.value,
    };
    onSaveEdit(item, data);
  };

  handleCancelEdit = (event: any) => {
    event.preventDefault();
    const { onCancelEdit, item } = this.props;
    onCancelEdit(item);
  };
}
