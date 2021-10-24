const delayInMs = 1200;

const fakeApi = {
  successfulRequest(url: string, { params = {}, isSilent = false, responseData = {} } = {}) {
    if (!isSilent)
      console.log('REQUEST (successful...)', url, params);
    return new Promise(function (resolve) {
      setTimeout(function () {
        const response = {
          status: 'SUCCESS',
          url,
          data: responseData
        };
        if (!isSilent)
          console.log('RESPONSE (successful...)', response, params);
        resolve(response);
      }, delayInMs);
    });
  },

  failedRequest(url: string, { params = {}, isSilent = false, error = new Error(`Unknown error`) } = {}) {
    if (!isSilent)
      console.log('REQUEST (failed...)', url);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        if (!isSilent)
          console.log('RESPONSE (failed...)');
        reject(error);
      }, delayInMs);
    });
  },
};

export default fakeApi;
