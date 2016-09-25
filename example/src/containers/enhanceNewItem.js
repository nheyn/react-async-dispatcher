/* @ flow - NEED TO ADD recompose */
import { compose, mapProps } from 'recompose';
import { useStoreState, useActionCreator } from 'react-async-dispatcher';

import { NEW_ITEM_UPDATE } from '../dispatcher/';
import { LIST_ITEM_ADD } from '../dispatcher/listItems/addItem';

export default compose(
  useStoreState('newItem'),
  useActionCreator('onUpdateNewItem', (label) => {
    return {
      type: NEW_ITEM_UPDATE,
      label,
    };
  }),
  useActionCreator('onAddItem', (label) => {
    return {
      type: LIST_ITEM_ADD,
      label,
    };
  }),
  mapProps(({ newItem: label, ...otherProps }) => {
    return {
      label,
      ...otherProps,
    }
  }),
);
