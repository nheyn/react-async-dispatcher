/* @flow */
import React from 'react';

import getDispatcher from './getDispatcher';

import type { Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from 'react-async-dispatcher';

/**
 *
 */
export default function useDispatch(fnName: string = 'dispatch', dispatcher?: Dispatcher): HigherOrderComponent {
  return (Component) => {
    class UseDispatch extends React.Component<*, *, *> {
      render(): React.Element<*> {
        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);
        let dispatchProps = {};
        dispatchProps[fnName] = (action) => currDispatcher.dispatch(action);

        return <Component {...dispatchProps} {...this.props} />;
      }
    }
    UseDispatch.contextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return UseDispatch;
  };
}