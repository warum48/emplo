import { NextRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

type MockUseRouter = {
  route: string;
  pathname: string;
  query: ParsedUrlQuery;
  asPath: string;
  basePath: string;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
  isReady: boolean;
  isFallback: boolean;
  isPreview: boolean;
  push: jest.Mock;
  replace: jest.Mock;
  reload: jest.Mock;
  back: jest.Mock;
  forward: jest.Mock;
  prefetch: jest.Mock;
  beforePopState: jest.Mock;

  isLocaleDomain: boolean;
  events: {
    on: jest.Mock;
    off: jest.Mock;
    emit: jest.Mock;
  };
};

export function createMockRouter(overrides: Partial<MockUseRouter> = {}): MockUseRouter {
  return {
    route: '',
    pathname: '',
    query: {},
    asPath: '',
    basePath: '',
    isReady: true,
    isFallback: false,
    isPreview: false,
    isLocaleDomain: false,
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    ...overrides,
  };
}
