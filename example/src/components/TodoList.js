/*
 * @flow
 */
import React from 'react';

import enhanceTodoList from '../containers/enhanceTodoList';
import ItemList from './ItemList';

type Props = {
  title: string,
};

function TodoList({ title, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      <h2>{title}</h2>
      <ItemList />
    </div>
  );
}
export default enhanceTodoList(TodoList);
