import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      }),
    );
  }),

  rest.get('/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),

    );
  }),
];
