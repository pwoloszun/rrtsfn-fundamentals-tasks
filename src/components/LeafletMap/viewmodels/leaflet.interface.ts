/*eslint @typescript-eslint/no-useless-constructor: 'off'*/

type LeafLetObj = any;

let L: LeafLetObj;
const envs = [
  'test',
  // 'development' // TODO: uncomment if no internet connection
];

// @ts-ignore
if (!(window as any).L || envs.includes(process.env.NODE_ENV)) {
  const marker = {
    on(...args: any[]) {
    },

    setIcon(...args: any[]) {
    }
  };

  const myStub = {
    addTo(...params: any[]) {
      return marker;
    },
    setView(...args2: any[]) { }
  };

  class Default { }
  class Icon {
    constructor(p: any) { }
  }


  L = {
    map(...args: any[]) {
      return myStub;
    },
    tileLayer(...args: any[]) {
      return myStub;
    },
    marker(...args: any[]) {
      return myStub;
    },
    Icon: {
      Default
    },
    icon: Icon,
  };
} else {
  L = (window as any).L;
}

export { L };
