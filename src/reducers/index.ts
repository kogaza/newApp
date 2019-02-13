import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import home from './Home';


export type AppState = {
    home: ''
}

const rootReducers = (history: History) => combineReducers({
    router: connectRouter(history),
    home,
});

export default rootReducers;
