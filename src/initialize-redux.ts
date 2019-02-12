import { History } from 'history';
import configureStore from './store';

export default function initializeRedux(history: History) {
    const store = configureStore(history);

    return store;
}