/* @flow */
import React from 'react';

import getDispatcher from './getDispatcher';

import type { Action, Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from 'react-async-dispatcher';

/**
 *
 */
export default function dispatchWhenMounted(
  action: Action | Array<Action> | ((props: Object) => Action | Array<Action>),
  dispatcher?: Dispatcher
): HigherOrderComponent {
  return (Component) => {
    class DispatchWhenMounted extends React.Component<*, *, *> {
      componentDidMount() {
        // Convert action to an array of actions
        const actions = action;
        if(typeof action === 'function')  actions = action(props);
        if(!Array.isArray(action))        actions = [ action ];


        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);
        for(let i=0; actions.length>i; i++) {
          currDispatcher.dispatch(actions[i]);
        }
      }

      render(): React.Element<*> {
        return <Component {...this.props} />;
      }
    }
    DispatchWhenMounted.contextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return DispatchWhenMounted;
  };
}
