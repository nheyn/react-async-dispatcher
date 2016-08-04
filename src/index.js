/* @flow */
import useDispatcher from './useDispatcher';
import useStoreState from './useStoreState';
import useDispatch from './useDispatch';

import type React from 'react';

export type HigherOrderComponent = (Component: React.Component<*, *, *>) => React.Component<*, *, *>;

export {
  useDispatcher,
  useStoreState,
  useDispatch,
};

export default {
  useDispatcher,
  useStoreState,
  useDispatch,
};