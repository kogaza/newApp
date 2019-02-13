import {createBrowserHistory} from 'history';
import initializeReactApp from './initialize-react-app';
import initializeRedux from './initialize-redux';
// import { setValue } from './actions/Home';

// const { routes } = require('lawpoint-common/config/global/ws.json');

const appliationRootElement = document.getElementById('root');

if (appliationRootElement) {
    const history = createBrowserHistory();
    const store = initializeRedux(history);

    const rejectHandler = (error?: Error) => console.error('Cannot initialize app', error); // tslint:disable-line

    initializeReactApp(appliationRootElement, history, store)
        .then(() => {
            console.warn('store', store.getState());
            // store.dispatch(setValue('Ada'));
        })
        .catch(rejectHandler);
} else {
    // Print an error in browser's console to notify that there's something wrong
    // tslint:disable-next-line
    console.error('Application root element not found');
}
