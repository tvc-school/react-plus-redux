import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'

// const logger = createLogger({ collapsed: true })

export default function configureStore() {
  // const store = createStore(users, applyMiddleware(logger))
  const store = createStore(
     rootReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger))
  return store
}
