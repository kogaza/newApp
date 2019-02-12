import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import MyName from './components/Name';
// import UserManagement from 'src/UserManagement';
// import NotFound from 'components/NotFound';
// import InternalServerError from 'components/InternalServerError';
// import UnderMaintenance from 'components/UnderMaintenance';
// import ConnectionTest from 'components/ConnectionTest';
// import AppLinks from 'components/AppLinks';

const routing = require('./routing.json');

export default function routes(): JSX.Element {

    return (
        <Switch>
            <Route
                path="/"
                exact={true}
                render={() => <Redirect to={routing.app.default.path}/>}
            />
            <Route path={routing.app.default.path} component={MyName}/>
            {/*<Route path={routing.userManagement.default.path} component={UserManagement} />*/}
            {/*<Route path={routing.notFound.default.path} component={NotFound} />*/}
            {/*<Route path={routing.internalServerError.default.path} component={InternalServerError} />*/}
            {/*<Route path={routing.underMaintenance.default.path} component={UnderMaintenance} />*/}
            {/*<Route path={routing.appLinks.default.path} component={AppLinks} />*/}
            {/*<Route path={'/connection'} component={ConnectionTest} />*/}
            <Redirect from="*" to={routing.notFound.default.path} />
        </Switch>
    );
}
