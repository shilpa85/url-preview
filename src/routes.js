import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./layouts/Index.js"


const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/search" component={Layout} />
    </Switch>
    )
}

export default Routes;