/*
 * @flow
 */
import type { ListItemState } from './index';

type State = Array<ListItemState>;

export const LIST_ITEM_LOAD = 'LIST_ITEM_LOAD';

export default function loadInitialItems(state: State, action: Action, { pause }: Object): State | Promise<State> {
  if(action.type !== LIST_ITEM_LOAD)  return state;

  const itemsPromise = getItems();

  return pause(itemsPromise);
}

function getItems(): Promise<State> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 0, label: 'Item 0', isChecked: false },
        { id: 1, label: 'Item 1', isChecked: true },
        { id: 2, label: 'Item 2', isChecked: false },
      ]);
    }, 1000);
  });
}
