import React, {Component, Fragment} from 'react';
import {BrowserRouter, Redirect, Route as BaseRoute, Switch} from "react-router-dom";
import PageTemplate from './components/PageTemplate';
import Cabinet from './screen/Cabinet';
import Page404 from "./screen/Page404";
import appCss from './app.css';

import SignIn from './screen/SignIn';

const Route = ({component, ...props}) => {

	let modernComponent = () => (<PageTemplate>{component}</PageTemplate>);

	return (
		<BaseRoute {...props} component={modernComponent} />
	)
};

const App = () => (
	<div className={'app'}>
		<Fragment>
			<BrowserRouter>
					<Switch>
						<Route path='/auth' exact component={<SignIn />}/>
						<Route path='/cabinet' exact component={<Cabinet />}/>
						<Route path='/' exact component={<div>Home Page</div>}/>
						<Route path='/logout' exact component={<Redirect to='/' />}/>


						<Route component={<Page404 />} />

					</Switch>
			</BrowserRouter>
		</Fragment>
	</div>
);


export default App;