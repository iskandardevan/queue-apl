import './App.css';
import Home from './Pages/Home';
import RegisterQueue from './Pages/RegisterQueue'; 
import CheckQueue from './Pages/CheckQueue';
import DetailQueue from './Pages/DetailQueue';
import ListQueue from './Pages/ListQueue';
import Notfound from './Pages/NotFound';
import {BrowserRouter ,Router, Switch, Route, useParams} from "react-router-dom"
import { createBrowserHistory } from "history";
import React, { useEffect, useState } from 'react';


export default function App() {
    const history = createBrowserHistory(process.env.PUBLIC_URL);

    return (
        <>
            <BrowserRouter history={history}>
                
                <Switch>
                    <Route exact path='/'   >
                        <Home ></Home>
                    </Route>
                    <Route exact path='/Register' component={RegisterQueue}/>
                    <Route exact path='/Detail' component={DetailQueue}/>
                    <Route exact path='/Check' component={CheckQueue}/>
                    <Route exact path='/List' component={ListQueue}/>
                    <Route component={Notfound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}