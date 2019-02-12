import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {History} from 'history';
import {ConnectedRouter} from 'connected-react-router';
// import {MyName} from './components/Name';
import routes from './routes';
import {App} from "./App";
// import 'assets/styles/index.scss';

// Right now the store argument cannot be fully typed due to incompatible types of configureStore function
// TODO: Add root state type to Store
function wrapElementInHocs(element: React.ReactElement<any>, store: Store<any>) {
    return (
        <Provider store={store}>
            {element}
        </Provider>
    );
}

export default function initializeReactApp(
    htmlElement: HTMLElement,
    history: History,
    store: Store,
): Promise<void> {

    return new Promise((resolve) => {
        const rootElement = (
            <ConnectedRouter history={history}>
                <App>
                    {routes()}
                </App>
            </ConnectedRouter>
        );
        const wrappedElement = wrapElementInHocs(rootElement, store);

        ReactDOM.render(wrappedElement, htmlElement, resolve);
    });
}
