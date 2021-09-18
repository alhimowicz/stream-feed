import React, { ReactElement, ReactNode } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface IRoutes {
    children: ReactNode;
}

export const Routes = ({ children }: IRoutes): ReactElement => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route path="/">

                </Route>
                <Route path="/movies">

                </Route>
            </Switch>
        </BrowserRouter>
    );
};
