/*eslint @typescript-eslint/no-unused-vars: 'off'*/
import React, { useState } from 'react';

import styles from './styles.module.css';
import { countriesDict } from '../../dictionaries/countries.dict';

type FormEl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

export default function MyFormExample(): React.ReactElement {
  const formValues = { // TODO
    personName: 'bob',
    age: 8,
    countryId: countriesDict[0].id
  };

  // TODO later: refactor
  // const inputChangeHandler = (event: React.ChangeEvent<FormEl>) => { };

  const submitHandler = (ev: React.SyntheticEvent) => {
    // TODO
  };

  return (
    <div className={styles.myFormExample}>
      <form>
        <label>
          Person Name
          <input type='text' />
        </label>
        <p>Curr Person Name: TODO_PLACEHOLDER</p>

        <label>
          Age
          <input type='number' />
        </label>
        <p>Curr Age: TODO_PLACEHOLDER</p>

        <label>
          Country
          <select>
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
