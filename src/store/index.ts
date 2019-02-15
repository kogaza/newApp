// import { History } from 'history';
import {createLogger} from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers/index';
// import appSaga from 'sagas/index';

import {createBrowserHistory} from 'history';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';

// export default function configureStore(history: History) {
// const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware();

// const middleware = [
//     thunkMiddleware,
//     routerMiddleware(history),
//     sagaMiddleware,
// ];

// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger({
//         // ...options
//     }));
// }

// const store = createStore(
//     rootReducers(history),
// composeEnhancer(
//     applyMiddleware(...middleware)
// )
// );

// sagaMiddleware.run(appSaga);

// return store;
// }


// import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore(preloadedState: any) {
  const store = createStore(
    rootReducers(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        createLogger({
          // ...options
        })
        // ... other middlewares ...
      ),
    ),
  )

  return store
}