/* @flow */
import type React from 'react';
import type { Dispatcher } from 'async-dispatcher';

export default function getDispatcher(props: Object, context: Object, dispatcher?: Dispatcher): Dispatcher {
  if(dispatcher)          return dispatcher;
  if(props.dispatcher)    return props.dispatcher;
  if(context.dispatcher)  return context.dispatcher;

  throw new Error('No dispatcher provided');
}
