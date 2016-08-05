/*
 * @flow
 */
import React from 'react';

import enhanceNewItem from '../containers/enhanceNewItem';

type Props = {
  label: string,
  onUpdateNewItem: (label: string) => void,
  onAddItem: (label: string) => void,
};

function NewItem({ label, onUpdateNewItem, onAddItem, ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      <input type="text" value={label} onChange={({ target }) => onUpdateNewItem(target.value)} />
      <button onClick={() => onAddItem(label)}>Add</button>
    </div>
  );
}

export default enhanceNewItem(NewItem);