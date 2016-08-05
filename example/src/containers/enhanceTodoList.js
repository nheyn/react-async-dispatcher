/* @ flow - NEED TO ADD recompose */
import { compose, mapProps } from 'recompose';
import { useDispatcher, useStoreState, dispatchWhenMounted } from 'react-async-dispatcher';

import dispatcher from '../dispatcher';
import { LIST_ITEM_LOAD } from '../dispatcher/listItems/loadInitialItems';

export default compose(
  useDispatcher(dispatcher),
  useStoreState('basicInfo'),
  dispatchWhenMounted({ type: LIST_ITEM_LOAD }),
  mapProps(({ dispatcher, basicInfo: { title }, ...otherProps }) => {
    return {
      title,
      ...otherProps,
    };
  }),
);