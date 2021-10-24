import { MyFormValuesMap } from './index';

interface MyFormErrorsMap {
  [key: string]: string;
}

export default function validateMyForm(values: MyFormValuesMap): MyFormErrorsMap {
  const errors: MyFormErrorsMap = {};
  const { fullName, age } = values;
  if (!fullName) {
    errors.fullName = `Name is required`;
  }
  if (fullName && fullName.length < 3) {
    errors.fullName = `Minimum Name length is 3`;
  }
  if (age < 18) {
    errors.age = `Minimum age is 18`;
  }
  return errors;
}
