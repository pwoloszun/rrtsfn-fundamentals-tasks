import { rest } from 'msw';
import { setupServer } from 'msw/node';

import getApiUrl from 'src/api/getApiUrl';

import { handlers } from './default-handlers';

export const server = setupServer(...handlers);

type ServerMethod = 'get' | 'put' | 'post' | 'patch' | 'delete';

interface StubOptions {
  delay?: number;
}

interface ServerStubParams {
  method: ServerMethod;
  path: string;
  params?: any; // TODO
  responseJson: any;
  options?: StubOptions;
}

export const stubServerApi = {
  stub(stubParams: ServerStubParams) {
    const { method, path, responseJson, options = {} } = stubParams;
    serverUseJsonApi(method, path, responseJson, options);
  },
};

function serverUseJsonApi(method: ServerMethod, path: string, respJsonData: any, options: StubOptions): void {
  const fullUrl = getApiUrl(path);

  server.use(
    rest[method](fullUrl, (req, res, ctx) => {
      const args = [
        ctx.json(respJsonData),
      ];
      if (options.delay !== undefined) {
        args.unshift(ctx.delay(options.delay));
      }
      return res(...args);
    }),
  );
}
