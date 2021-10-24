import { FormValuesMap } from './index';
import { delay } from '../../../../utils/randoms';

export function validateInterrelatedForm(values: FormValuesMap): any {
  const { fullName = '', dateOfBirth, nationalId } = values;

  // TODO fullName: Minimum Name length is 3

  // TODO dateOfBirth: Required date format: YYYY-MM-DD
  // const dateRegExp = /^\d{4}-\d{2}-\d{2}$/

  // TODO dateOfBirth: Required nationalId format: 11 digits
  // const nationalIdRegExp = /^\d{11}$/

  // TODO interrelated DoB & National ID: Date of birth does not match National ID

  return null;
}

const RESTRICTED_NAMES = ['bob', 'ed', 'batman'];

export async function asyncValidateInterrelatedForm(values: any): Promise<any> {
  // TODO: use delay(1200)
  return null;
}
