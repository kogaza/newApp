// import { connectRouter, RouterState } from 'connected-react-router/immutable';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Map } from 'immutable';
// import { reducer as notifications } from 'react-notification-system-redux';
import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import home, { IHomeState } from './Home';

interface IRootReducer {
    home: IHomeState;
}

export type AppState = Map<keyof IRootReducer, IRootReducer[keyof IRootReducer]>;

const rootReducers = (history: History) => combineReducers({
    router: connectRouter(history),
    home,
});

export default rootReducers;
