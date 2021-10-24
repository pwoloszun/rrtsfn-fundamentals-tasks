/*eslint @typescript-eslint/no-unused-vars: 'off'*/

import React from 'react';

import styles from './styles.module.css';
import FormInfo from '../FormInfo/index';

import { asyncValidateInterrelatedForm, validateInterrelatedForm } from './validate-interrelated-form';

interface Props {
}

export interface FormValuesMap {
  fullName: string;
  dateOfBirth: string;
  nationalId: string;
}

// TODO 3a: async validations
interface State {
  formValues: FormValuesMap;
}

export default class InterrelatedValidations extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      formValues: {
        fullName: '',
        dateOfBirth: '',
        nationalId: ''
      },
    };
  }

  render() {
    // TODO 1a: controlled components
    // TODO 2: sync validation
    return (
      <form
        className={styles.myForm}
        autoComplete="off"
      >
        <h5>InterrelatedValidations Form</h5>

        <div>
          <input name="fullName"
            placeholder="Your Full Name"
            type="text"
          />
          <span className="alert alert-danger">ERROR_PLACEHOLDER</span>
        </div>

        <div>
          <input name="dateOfBirth"
            placeholder="Date of Birth"
          />
          <span className="alert alert-danger">ERROR_PLACEHOLDER</span>
        </div>

        <div>
          <input name="nationalId"
            placeholder="National ID"
          />
          <span className="alert alert-danger">ERROR_PLACEHOLDER</span>
        </div >

        <hr />

        <p className="alert alert-danger">INTERRELATED ERROR_PLACEHOLDER</p>

        <div>
          <button type="submit">Submit</button>
        </div>

        <hr />

        {/* <FormInfo formValues={values} errors={errors} /> */}
      </form >
    );
  }

  private formControlChangeHandler = (event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    // TODO 1b: controlled compoenents
    const { name, type, value, checked } = event.target;

    // TODO 3b: async validation
  };

  private submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    // TODO 4: log form values
  };

}
