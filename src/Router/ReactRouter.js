import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "../Container/NotFound.js";
import routes from "./routes.js"; //TODO: this is bringing different routes in routes.js and sent to index.js

class ReactRouter extends Component {
    getRoutes = (routes) => {
        return routes.map((prop, index) => {
            if (prop.layout === "/") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={index}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {
        return (
            <Switch>
                {this.getRoutes(routes)}
                <Redirect to="/NewsLaundry-Chetan" />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default ReactRouter;
