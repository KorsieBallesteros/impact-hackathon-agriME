import React from 'react';
import { Route } from 'react-router-dom';
import PriceWatchList from './pricewatchlist/PriceWatchListView';
import PriceWatchDetail from './pricewatchdetail/PriceWatchDetailView';
import Login from './login/Login';
import Signup from './signup/Signup';
import Form from './form/form';
import farmerprofile from './farmer/farmerprofile';
import Welcome from './welcome/welcome';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={Welcome} />
       <Route exact path='/pricewatch' component={PriceWatchList} /> 
        <Route exact path='/articles/:articleID' component={PriceWatchDetail} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
        <Route exact path='/form/' component={Form} />
       {<Route exact path='/farmerprofile/' component={farmerprofile} />}
    </div>
);

export default BaseRouter;