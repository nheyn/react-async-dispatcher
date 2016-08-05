/*
 * @flow
 */
import { createStore } from 'async-dispatcher';

import createLogMiddleware from '../createLogMiddleware';
import addItem from './addItem';
import checkItem from './checkItem';
import updateItem from './updateItem';
import loadInitialItems from './loadInitialItems';

export type ListItemState = {
  id: number,
  label: string,
  isChecked: bool
};

const logMiddleware = createLogMiddleware('listItems');

export default createStore({
  initialState: [],
  updaters: [
    addItem,
    checkItem,
    updateItem,
    loadInitialItems,
  ],
  middleware: [
    logMiddleware,
  ],
});