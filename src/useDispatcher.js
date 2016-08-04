/* @flow */
import React from 'react';

import type { Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from './index';

/**
 *
 */
export default function useDispatcher(dispatcher: Dispatcher): HigherOrderComponent {
  return (Component) => {
    class UseDispatcher extends React.Component<*, *, *> {
      getChildContext(): Object {
        return { dispatcher };
      }

      render(): React.Element<*> {
        return <Component dispatcher={dispatcher} {...this.props} />;
      }
    }
    UseDispatcher.childContextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return UseDispatcher;
  }
}