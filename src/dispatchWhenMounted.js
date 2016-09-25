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
        const actions = getActionArray(this.props, action);
        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);

        // Peform dispatch when component is first mounted
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

function getActionArray(
  props: Object,
  inputAction: Action | Array<Action> | ((props: Object) => Action | Array<Action>)
): Array<Action> {
  if(typeof inputAction === 'function') return getActionArray(props, inputAction(props));
  else if(Array.isArray(inputAction))   return inputAction;
  else                                  return [ inputAction ];
}
