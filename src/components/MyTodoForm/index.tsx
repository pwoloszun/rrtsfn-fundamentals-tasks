import React from 'react';

import styles from './index.module.css';

const listCssClasses = [
  styles.myTodoForm
].join(' ');

interface MyListProps {
  onCreate: (data: any) => void;
};


export default class MyTodoForm extends React.Component<MyListProps> {
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
        <h3>Create Todo</h3>
        <form className="d-flex flex-column justify-content-around">
          <div className="form-group">
            <label>Title*</label>
            <input ref={this.titleRef}
              type="text" className="form-control" placeholder="Title" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input ref={this.descriptionRef}
              type="text" className="form-control" placeholder="Description" />
          </div>
          <div className="d-flex flex-row justify-content-around">
            <button onClick={this.handleCreate}
              className="btn btn-success">Create
            </button>
            <button onClick={this.handleCancel}
              className="btn btn-secondary">Clear
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleCreate = (event: any) => {
    event.preventDefault();
    const { onCreate } = this.props;
    const data = {
      title: this.titleRef.current.value,
      description: this.descriptionRef.current.value,
    };
    onCreate(data);
    this.resetFields();
  };

  handleCancel = (event: any) => {
    event.preventDefault();
    this.resetFields();
  };

  resetFields() {
    this.titleRef.current.value = '';
    this.descriptionRef.current.value = '';
  }
}
