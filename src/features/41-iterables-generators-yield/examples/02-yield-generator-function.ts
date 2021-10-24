/* eslint-disable */
function* myGeneratorFn(): IterableIterator<number> {
  console.log('GEN FUN: START');

  console.log('GEN FUN: 1st val');
  yield 100;
  console.log('GEN FUN: 2nd val');
  yield 200;
  console.log('GEN FUN: 3rd val');
  yield 300;

  console.log('GEN FUN: WILL END');
  return -997;
}


function generatorObjectExample() {
  const generatorObject = myGeneratorFn(); // implements iterator protocol

  let iteratorResult = generatorObject.next();
  while (!iteratorResult.done) {
    console.log('generatorObj.next() result:', iteratorResult);
    iteratorResult = generatorObject.next();
  }
  console.log('generatorObj.next() END result:', iteratorResult);
}

function sec() {
  const generatorObject = myGeneratorFn(); // implements iterator protocol
  let val;
  for (val of generatorObject) {
    console.log('generatorObj.next() value:', val);
  }
  console.log('generatorObj.next() END value:', val);
}

export default function yieldGeneratorFunctionExample() {
  generatorObjectExample();
  // sec();
}
