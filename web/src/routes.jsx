import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/public/Login';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = true;

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{ pathname: '/', state: { from: props.location } }}
                    />
                )
            }
        />
    );
};

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={() => <h1>SignUp</h1>} />
            <PrivateRoute path="/app" component={() => <h1>App</h1>} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
