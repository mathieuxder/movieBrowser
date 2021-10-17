import React from "react";
import {BrowserRouter, Switch , Route} from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound.js";
import Discover from "./pages/Discover";


const App = () => {
return(
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details" exact component={Details}/>
        <Route path="/discover" exact component={Discover}/>
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
);
}

export default App ;