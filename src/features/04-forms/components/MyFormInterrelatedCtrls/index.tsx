import React from 'react';

import { countriesDict } from '../../dictionaries/countries.dict';
import { interestTypesDict, getInterestsByType } from '../../dictionaries/interests.dict';

import styles from './styles.module.css';
import FormInfo from '../FormInfo/index';
import validateMyForm from './validate-my-form';

interface Props {
}

export interface MyFormValuesMap {
  [key: string]: any;
}

// TODO 3a: availableInterestsDict
interface State {
  formValues: MyFormValuesMap;
}

export default class MyFormInterrelatedCtrls extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      formValues: {
        fullName: 'Bob',
        age: '21',
        areDetailsEnabled: false,
        height: '',
        country: '',
        selectedInterestType: '',
        selectedInterests: {}
      },
    };
  }

  render() {
    // TODO 1: controlled components
    // TODO 2: validation & errors
    // TODO 2b: handle "areDetailsEnabled" ctrl & toggle "height" ctrl visibility
    // TODO 3b: handle "selectedInterestType" ctrl change & load async availableInterestsDict
    // TODO 4: handle "selectedInterests" ctrl change

    return (
      <form
        onSubmit={this.submitHandler}
        className={styles.myForm}
        autoComplete="off"
      >
        <h5>My Form Validation task</h5>

        <div>
          <input name="fullName"
            placeholder="Your name?"
            type="text"
          />
          <span className="alert alert-danger">ERROR_PLACEHOLDER</span>
        </div>

        <div>
          <input name="age"
            placeholder="Enter your age"
            type="number"
          />
          <span className="alert alert-danger">ERROR_PLACEHOLDER</span>
        </div>

        <hr />

        <div>
          <label>
            <input name="areDetailsEnabled"
              type="checkbox"
            />
            Enable details
          </label>
        </div>

        <div>
          <input name="height"
            type="number"
            placeholder="Your height"
          />
        </div>

        <hr />

        <div>
          <label>Select Country</label>
          <select name="country">
            <option value="" disabled></option>
            <option>TODO_OPTION</option>
          </select>
        </div>

        <hr />

        <div>
          <label>Select your interest type</label>
          <select name="selectedInterestType">
            <option value="" disabled></option>
            <option>TODO_OPTION</option>
          </select>
        </div>

        <div>
          <span>
            <label>Choose your Interests</label>
          </span>

          <label>
            <input name="selectedInterests"
              type="checkbox"
            />
            INTEREST_PLACEHOLDER_1
          </label>
          <label>
            <input name="selectedInterests"
              type="checkbox"
            />
            INTEREST_PLACEHOLDER_2
          </label>

        </div>

        <hr />

        <div>
          <button type="submit">Submit</button>
        </div>

        <hr />

        {/* <FormInfo formValues={values} errors={errors} /> */}
      </form>
    );
  }

  private formControlChangeHandler = (event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const { name, type, value, checked } = event.target;
    const ctrlValue = type === 'checkbox' ? checked : value;

    this.setState((state) => {
      const { formValues } = state;
      return {
        formValues: {
          ...formValues,
          [name]: ctrlValue
        }
      };
    });
  };

  private submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { formValues } = this.state;
    console.log('form values', formValues);
  };

}
