/* eslint @typescript-eslint/no-unused-vars: 'off' */

import React from 'react';

import MySimpleFormWrapper, { ActionsParam, ErrorsMap, RenderFnParams, ValuesMap } from './MySimpleFormWrapper';
import styles from './styles.module.css';

const validateFn = (values: ValuesMap) => {
  let errors: ErrorsMap = {};
  const { name, age } = values;
  if (!name) {
    errors.name = `Name is required`;
  }
  if (name && name.length < 3) {
    errors.name = `Minimum Name length is 3`;
  }
  if (age < 18) {
    errors.age = `Minimum age is 18`;
  }
  return errors;
};

const renderFn = (params: RenderFnParams) => {
  const { handleSubmit, handleChange, values, errors, isSubmitting } = params;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
          <input
          name="name"
          onChange={handleChange}
          value={values.name}
          type="text"
        />
        <p>{errors.name}</p>
      </div>
      <div>
        Age:
          <input
          name="age"
          onChange={handleChange}
          value={values.age}
          type="number"
        />
        <p>{errors.age}</p>
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
        </button>
    </form>
  );
};

const onSubmitHandler = (values: ValuesMap, actions: ActionsParam) => {
  const { setSubmitting } = actions;
  console.log(JSON.stringify(values, null, 2));
  setTimeout(() => {
    console.log('succesfully submitted');
    setSubmitting(false);
  }, 1800);
};

export default function AdvPropsTask(): React.ReactElement {

  const initialValues = {
    name: 'bob',
    age: 12,
    sex: 'M'
  };

  return (
    <div className={styles.myComp}>

      {/* <MySimpleFormWrapper
        initialValues={initialValues}
        validate={validateFn}
        render={renderFn}
        onSubmit={onSubmitHandler}
      /> */}

    </div>
  );
}
