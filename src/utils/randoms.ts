const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const delayedValue = <T>(value: T, ms: number): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

const delayedError = (error: Error, ms: number): Promise<Error> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(error);
    }, ms);
  });
};

function random(max: number, roundDown = false): number {
  const result = Math.random() * max;
  if (roundDown) {
    return Math.floor(result);
  } else {
    return result;
  }
}

function randomBetween(min: number, max: number, roundDown = false): number {
  return min + random(max - min, roundDown);
}

export {
  delay,
  delayedValue,
  delayedError,
  random,
  randomBetween,
}
