const myIterator = {
  currentValue: 0,
  next() {
    if (this.currentValue < 3) {
      this.currentValue += 1;
      return {
        value: this.currentValue,
        done: false
      };
    } else {
      return {
        value: -99,
        done: true
      };
    }
  }
};

export default function iteratorProtocolExample() {
  let iteratorResult = myIterator.next();
  while (!iteratorResult.done) {
    console.log('iteratorProtocol myIterator val:', iteratorResult);
    iteratorResult = myIterator.next();
  }
  console.log('iteratorProtocol myIterator END:', iteratorResult);
}
