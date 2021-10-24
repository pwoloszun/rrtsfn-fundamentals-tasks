function* sumGeneratorFn(startValue = 0): Generator<number, number, number | null> {
  let sum = startValue;
  let receivedValue = yield sum;
  while (receivedValue !== null) {
    sum += receivedValue;
    receivedValue = yield sum;
  }
  return startValue;
}


export default function sumGenTask() {
  const toAddValues = [2, 1, 2, 10, 2, null, 10, 100, 100];

  const genObj = sumGeneratorFn(100);
  for (let toAdd of toAddValues) {
    const genResult = genObj.next(toAdd);
    console.log('sumGenTask value:', genResult.value, ' done:', genResult.done);
  }

}
