import React from 'react';
import Menu from './../ui/Menu';

const PageTemplate = ({children}) => (
	<div className={'page-template-container'}>
		<Menu/>
		{children}
	</div>
);

export default PageTemplate;