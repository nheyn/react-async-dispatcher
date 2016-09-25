/* @flow */
import React from 'react';

import getDispatcher from './getDispatcher';

import type { Dispatcher } from 'async-dispatcher';
import type { HigherOrderComponent } from 'react-async-dispatcher';

type State = {
  data: any,
  unsubscribe: () => void,
};

/**
 *
 */
export default function useStoreState(storeName: string, dispatcher?: Dispatcher): HigherOrderComponent {
  return (Component) => {
    class UseStoreState extends React.Component<*, *, *> {
      state: State;

      constructor(props: any, context: any) {
        super(props, context);

        const currDispatcher = getDispatcher(props, context, dispatcher);
        this.state = {
          data: currDispatcher.getStateFor(storeName),
          unsubscribe: () => undefined,
        };
      }

      componentDidMount() {
        const currDispatcher = getDispatcher(this.props, this.context, dispatcher);
        const unsubscribe = currDispatcher.subscribeTo(storeName, (data) => {
          this.setState({ data });
        });

        this.setState({ unsubscribe });
      }

      componentWillUnmount() {
        this.state.unsubscribe();
      }

      render(): React.Element<*> {
        let storeProp = {};
        storeProp[storeName] = this.state.data;

        return <Component {...storeProp} {...this.props} />;
      }
    }
    UseStoreState.contextTypes = {
      dispatcher: React.PropTypes.object,
    };

    return UseStoreState;
  }
}
