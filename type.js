import { Action, Dispatcher } from 'async-dispatcher';

declare module "react-async-dispatcher" {
  declare export type HigherOrderComponent = Function;

  declare export function useDispatcher(dispatcher: Dispatcher): HigherOrderComponent;
  declare export function useStoreState(storeName: string, dispatcher?: Dispatcher): HigherOrderComponent;
  declare export function useDispatch(fnName?: string, dispatcher?: Dispatcher): HigherOrderComponent;
  declare export function dispatchWhenMounted(
    action: Action | Array<Action> | ((props: Object) => Action | Array<Action>),
    dispatcher?: Dispatcher
  ): HigherOrderComponent;
  declare export function useActionCreator(
    propName: string,
    ac: (...args: Array<any>) => Action | Promise<Action>,
    dispatcher?: Dispatcher
  ): HigherOrderComponent;
}
