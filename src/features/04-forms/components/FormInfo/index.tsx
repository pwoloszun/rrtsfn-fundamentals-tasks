import React from 'react';

import styles from './styles.module.css';

interface Props {
  formValues: any;
  errors?: any;
}

export default function FormInfo(props: Props) {
  const { formValues, errors = {} } = props;
  const valuesJson = JSON.stringify(formValues, null, 2);
  const errorsJson = JSON.stringify(errors, null, 2);
  return (
    <div className={styles.formInfo}>
      <h5>Form info</h5>
      <div>
        Value:
        <pre>{valuesJson}</pre>
      </div>

      <div>
        Errors:
        <pre>{errorsJson}</pre>
      </div>

    </div>

  );
}
