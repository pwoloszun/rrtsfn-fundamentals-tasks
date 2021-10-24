import { commerce } from 'faker';

import { delayedValue } from '../../../utils/randoms';

// api code
function apiFetchUser(): Promise<any> {
  return delayedValue({
    id: 31,
    login: 'ed',
    invoiceIds: [100, 101, 120],
    hasDiscount: true,
    discountIds: [31005]
  }, 1200);
}

function apiFetchInvoicesFor(user: any) {
  const invoices = user.invoiceIds.map((id: number) => {
    return {
      id,
      name: commerce.productName(),
      price: commerce.price()
    };
  });
  return delayedValue(invoices, 1200);
}

function apiFetchDiscountFor(user: any) {
  return delayedValue({ value: 0.25, expiresOn: '2020-02-01' }, 1200);
}


// client code
function* fetchUserWithInvoicesSaga(): Generator {
  const user: any = yield apiFetchUser();
  console.log('NO invoices', user);

  const invoices = yield apiFetchInvoicesFor(user);
  user.invoices = invoices;

  console.log('WITH invoices', user);

  if (user.hasDiscount) {
    user.discount = yield apiFetchDiscountFor(user);
    console.log('WITH invoices AND discount', user);
  }
}

// TODO
function recursiveSubscribe(genObj: Generator, apiPromise: Promise<any>) {
  apiPromise.then((data) => {
    const { value, done } = genObj.next(data);
    if (!done) {
      recursiveSubscribe(genObj, value);
    }
  });
}

type MyGenFn = () => Generator;

// TODO
function myRunSaga(sagaGenFn: MyGenFn) {
  const genObj = sagaGenFn();
  const { value, done } = genObj.next();
  if (!done) {
    recursiveSubscribe(genObj, value);
  }
}

export default function myRunSagasTask() {
  myRunSaga(fetchUserWithInvoicesSaga);
}
