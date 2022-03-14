// import { RootAction, RootReducer, Services } from 'CHTypes'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import { StateType } from 'typesafe-actions'
import rootReducer from './reducers'
import type { RootAction } from './actions'
import type { RootReducer } from './reducers'
import type { Services } from '../services'
import rootEpic from './epics'
import services from '../services'

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootReducer,
  Services
>({
  dependencies: services,
})

// configure middlewares
const middlewares = [epicMiddleware]
// compose enhancers
const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

// rehydrate state on app start
const initialState = {}

// create store
const store = createStore(rootReducer, initialState, enhancer)

epicMiddleware.run(rootEpic)

export type Store = StateType<typeof store>

// export store singleton instance
export default store
