/* @flow */
import React from 'react';

import getDispatcher from './getDispatcher';

import type { Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from 'react-async-dispatcher';

/**
 *
 */
export default function useActionCreator(
  propName: string,
  ac: (...args: Array<any>) => Action | Promise<Action>,
  dispatcher?: Dispatcher
): HigherOrderComponent {
  return (Component) => {
    class UseActionCreator extends React.Component<*, *, *> {
      render(): React.Element<*> {
        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);

        let acProp = {};
        acProp[propName] = (...args) => {
          return Promise.resolve(ac(...args)).then((action) => {
            return currDispatcher.dispatch(action);
          });
        };

        return <Component {...acProp} {...this.props} />;
      }
    }
    UseActionCreator.contextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return UseActionCreator;
  };
}
