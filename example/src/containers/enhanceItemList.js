/* @ flow - NEED TO ADD recompose */
import { compose } from 'recompose';
import { useStoreState, useActionCreator } from 'react-async-dispatcher';

import { LIST_ITEM_CHECK, LIST_ITEM_UNCHECK } from '../dispatcher/listItems/checkItem';

export default compose(
  useStoreState('listItems'),
  useActionCreator('onCheck', (id) => {
    return {
      type: LIST_ITEM_CHECK,
      id
    };
  }),
  useActionCreator('onUncheck', (id) => {
    return {
      type: LIST_ITEM_UNCHECK,
      id
    };
  }),
);
