import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/repositories' componete = {Repositories}/>
            </Switch>
        </BrowserRouter>        
    )
};