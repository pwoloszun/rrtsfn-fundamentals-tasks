import { delayedValue } from "../../../utils/randoms";

// api code
function apiFetchUser(): Promise<any> {
  return delayedValue({ login: 'bob', updatedAt: '1999-12-03 00:00:00' }, 1200);
}

// client code
function* fetchUser(): Generator<any> {
  const user = yield apiFetchUser();
  console.log('user data', user);
}

//
function myRunAsyncGeneratorFn() {
  const genObj = fetchUser();
  const apiPromise = genObj.next().value as Promise<any>;
  apiPromise
    .then((data) => {
      genObj.next(data);
    });
}

function myFirstApp() {
  myRunAsyncGeneratorFn();
}

export default function asyncWithYieldExample() {
  myFirstApp();
}
