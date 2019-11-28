import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch, withRouter} from 'react-router-dom'

import * as RoutePath from './config/route.Config.js'
import Home from '../src/features/home/container/homeContainer.js'
import Services from '../src/features/services/container/serviceContainer.js'
import Products from '../src/features/products/container/productContainer.js'
import Contact from '../src/features/contact/container/contactContainer.js'
import Navbar from '../src/features/app/navbar.js'
import Daniel from '../src/features/home/components/aboutDaniel.js'
import Jody from '../src/features/home/components/aboutJody.js'
import Carousel from '../src/features/home/components/infoCarousel.js'
import ScrollToTop from './features/app/scrollToTop.js'

const AppRoute=()=>{
    return(
        <Router>
        <Navbar />
        <ScrollToTop />
            <Switch>
                <Route path={`/`} exact component={Home} />
                <Route path={`/${RoutePath.Services}`} component={Services} />
                <Route path={`/${RoutePath.Products}`} component={Products} />
                <Route path={`/${RoutePath.Contact}`} component={Contact} />
                <Route path={`/${RoutePath.Daniel}`} component={Daniel} />
                <Route path={`/${RoutePath.Jody}`} component={Jody} />
                <Route path={`/${RoutePath.Carousel}`} component={Carousel} />
                <Redirect to={`/`} />
            </Switch>
        </Router>
    )
}
export default AppRoute