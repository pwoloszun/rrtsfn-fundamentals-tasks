import React, { useState } from 'react';

import styles from './styles.module.css';

export interface ValuesMap {
  [key: string]: any;
}

export interface ErrorsMap {
  [key: string]: string;
}

export interface RenderFnParams {
  values: ValuesMap;
  errors: ErrorsMap;
  isSubmitting: boolean;
  handleSubmit: (event: React.SyntheticEvent) => void;
  handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface ActionsParam {
  setSubmitting: (isSubmitting: boolean) => void;
}

interface IMySimpleFormWrapperProps {
  initialValues: ValuesMap;
  render: (params: RenderFnParams) => JSX.Element;
  validate: (values: ValuesMap) => ErrorsMap;
  onSubmit: (values: ValuesMap, actions: ActionsParam) => void;
}

export default function MySimpleFormWrapper(props: IMySimpleFormWrapperProps): React.ReactElement {
  const { initialValues, render, validate } = props;

  const formValues = {}; // TODO 1: render form initialized with received initialValues
  const errors = {}; // TODO 3: impl form controls on change validations, display error messages
  const isSubmitting = true;

  // TODO 2a: handle change on each form control, store values in state
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    // event.target as HTMLInputElement;

    // TODO: handle form control change using 'name' and 'value' properties
  };

  // TODO 2b: handle form submit event: validate & send form values
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // TODO: exit if invalid
    if (!isFormValid()) {
      return;
    }
    // TODO: trigger onSubmit
  };

  const setSubmitting = (isSubmitting: boolean) => {
    // TODO
  };

  const isFormValid = (): boolean => {
    // TODO
    return false;
  };

  return (
    <div className={styles.mySimpleFormWrapper}>
      TODO 1: RENDER_FORM
    </div>
  );
}
