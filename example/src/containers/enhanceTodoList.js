/* @ flow - NEED TO ADD recompose */
import { compose, mapProps } from 'recompose';
import { useDispatcher, useStoreState } from 'react-async-dispatcher';

import dispatcher from '../dispatcher';

export default compose(
  useDispatcher(dispatcher),
  useStoreState('basicInfo'),
  mapProps(({ dispatcher, basicInfo: { title }, ...otherProps }) => {
    return {
      title,
      ...otherProps,
    };
  }),
);