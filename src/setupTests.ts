// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import './mocks/jestGlobalMocks';
import './mocks/setup-mock-server';
import './mocks/setup-mock-timers';
import { setupTimeZone } from './mocks/setup-timezone';

setupTimeZone();

// @ts-ignore
jest.setTimeout(6000);
