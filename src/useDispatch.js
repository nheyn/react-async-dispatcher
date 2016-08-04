/* @flow */
import React from 'react';

import getDispatcher from './getDispatcher';

import type { Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from './index';

/**
 *
 */
export default function useDispatch(dispatcher?: Dispatcher): HigherOrderComponent {
  return (Component) => {
    class UseDispatch extends React.Component<*, *, *> {
      render(): React.Element<*> {
        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);
        const dispatch = (action) => currDispatcher.dispatch(action);

        return <Component dispatch={dispatch} {...this.props} />;
      }
    }
    UseDispatch.childContextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return UseDispatch;
  };
}