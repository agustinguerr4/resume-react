import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import About from '../src/Pages/About/About'
import Blog from '../src/Pages/Blog/Blog'
import Contact from '../src/Pages/Contact/Contact'
import Home from '../src/Pages/Home/Home'
import Portfolio from '../src/Pages/Portfolio/Portfolio'
import Resume from '../src/Pages/Resume/Resume'
import {  AnimatePresence } from "framer-motion"


const Routes = () => {
    const location = useLocation();
    return(
        <Switch location={location} key={location.pathname}>
            <AnimatePresence>
                <Route exact key="1" path='/' component={Home}/>
                <Route exact key="2" path='/about' component={About}/>
                <Route exact key="3" path='/blog' component={Blog}/>
                <Route exact key="4" path='/contact' component={Contact}/>
                <Route exact key="5" path='/portfolio' component={Portfolio}/>
                <Route exact key="6" path='/resume' component={Resume}/>
            </AnimatePresence>
        </Switch>
    )
}

export default Routes;