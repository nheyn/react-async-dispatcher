/* @flow */
import React from 'react';

import getDispatcher from './getDispatcher';

import type { Action, Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from './index';

/**
 *
 */
export default function dispatchWhenMounted(
  action: Action | Array<Action>,
  dispatcher?: Dispatcher
): HigherOrderComponent {
  const actions = Array.isArray(action)? action: [action];

  return (Component) => {
    class DispatchWhenMounted extends React.Component<*, *, *> {
      componentDidMount() {
        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);

        for(let i=0; actions.length>i; i++) {
          currDispatcher.dispatch(actions[i]);
        }
      }

      render(): React.Element<*> {
        return <Component {...this.props} />;
      }
    }
    DispatchWhenMounted.childContextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return DispatchWhenMounted;
  };
}