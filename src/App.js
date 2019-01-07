import React, {Component, Fragment} from 'react';
import {BrowserRouter, Redirect, Route as BaseRoute, Switch} from "react-router-dom";

import appCss from './app.css';

import LogInPage from './screen/LogInPage';
import HomePage from "./screen/HomePage";
import CabinetPage from './screen/CabinetPage';
import Page404 from "./screen/Page404";

import PageTemplate from './components/PageTemplate';

const Route = ({component, ...props}) => {

	let Component = component;
	let modernComponent = () => (<PageTemplate><Component routeProps={props} /></PageTemplate>);

	return (
		<BaseRoute {...props} component={modernComponent} />
	)
};

const App = () => (
	<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage}/>
				<Route path='/cabinet' component={CabinetPage}/>
				<Route path='/auth' component={LogInPage}/>

				<Redirect from='/logout' to='/'/>

				<Route component={Page404}/>

			</Switch>
	</BrowserRouter>
);


export default App;