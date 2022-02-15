/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import styles from './styles.module.css';
import { countriesDict } from '../../dictionaries/countries.dict';
import { produce } from 'immer';

type FormEl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export default function MyFormExample(): React.ReactElement {
  const [formValues, setFormValues] = useState({ // TODO
    personName: 'bob',
    age: 8,
    countryId: countriesDict[0].id
  });

  const inputChangeHandler = (event: React.ChangeEvent<FormEl>) => {
    const { value, name } = event.target;
    setFormValues((currFormValues) => {
      const nextFormValues = produce(currFormValues, (draft) => {
        (draft as any)[name] = value;
      });
      return nextFormValues;
    });
  };

  const submitHandler = (ev: React.SyntheticEvent) => {
    ev.preventDefault();
    console.log('AJAX REQ formValues:', formValues);
  };

  return (
    <div className={styles.myFormExample}>
      <form onSubmit={submitHandler}>
        <label>
          Person Name
          <input
            value={formValues.personName}
            onChange={inputChangeHandler}
            name="personName"
            type='text' />
        </label>
        <p>Curr Person Name: TODO_PLACEHOLDER</p>

        <label>
          Age
          <input
            value={formValues.age}
            onChange={inputChangeHandler}
            name="age"

            type='number' />
        </label>
        <p>Curr Age: TODO_PLACEHOLDER</p>

        <label>
          Country
          <select
            value={formValues.countryId}
            onChange={inputChangeHandler}
            name="countryId"
          >
            {
              countriesDict.map((country) => {
                const { id, name } = country;
                return (
                  <option key={id} value={id}>{name}</option>
                );
              })
            }
          </select>
        </label>
        <p>Curr Country: TODO_PLACEHOLDER</p>

        <div>
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
}
