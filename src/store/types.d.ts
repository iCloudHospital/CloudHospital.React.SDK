import { StateType, ActionType } from 'typesafe-actions'
import { Epic } from 'redux-observable'

declare module 'CHTypes' {
  export type Store = StateType<typeof import('./index').default>
  export type RootAction = ActionType<typeof import('./actions').default>
  export type RootReducer = StateType<typeof import('./reducers').default>
  export type RootEpic = Epic<RootAction, RootAction, RootReducer, Services>
}

declare module 'typesafe-actions' {
  interface Types {
    RootAction: ActionType<typeof import('./actions').default>
  }
}
