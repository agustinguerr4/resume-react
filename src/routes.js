import React from "react";
import { Switch, Route } from "react-router-dom";
import About from '../src/Pages/About/About'
import Blog from '../src/Pages/Blog/Blog'
import Contact from '../src/Pages/Contact/Contact'
import Home from '../src/Pages/Home/Home'
import Portfolio from '../src/Pages/Portfolio/Portfolio'
import Resume from '../src/Pages/Resume/Resume'


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            <Route exact path='/resume' component={Resume}/>
        </Switch>
    )
}

export default Routes;