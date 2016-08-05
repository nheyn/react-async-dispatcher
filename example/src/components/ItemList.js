/*
 * @flow
 */
import React from 'react';

import enhanceItemList from '../containers/enhanceItemList';
import Item from './Item';
import NewItem from './NewItem';

import type { Action } from 'async-dispatcher';

type Props = {
  listItems: Array<{
    id: number,
    label: string,
    isChecked: bool
  }>,
  onCheck: (id: number) => void,
  onUncheck: (id: number) => void,
};

function ItemList({ listItems, onCheck, onUncheck, ...otherProps }: Props): React.Element<*> {
  return (
    <ul {...otherProps}>
    {listItems.map(({ id, label, isChecked }) =>
      <li key={id}>
        <Item label={label} isChecked={isChecked} onCheckClicked={() => isChecked? onUncheck(id): onCheck(id)} />
      </li>
    )}
      <li>
        <NewItem />
      </li>
    </ul>
  );
}
export default enhanceItemList(ItemList);