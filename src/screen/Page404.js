import React, {Component} from 'react';
import {withRouter} from 'react-router'

const Page404 = ({location}) => (
	<div>
		<p>Page {location.pathname} - Not Found</p>
	</div>
);

export default withRouter(Page404);