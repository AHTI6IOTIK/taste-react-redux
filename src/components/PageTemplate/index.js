import React from 'react';

import Menu from './../ui/Menu';

export const PageTemplate = ({children}) => (
	<div className={'page-template-container'}>
		<Menu/>
		<div className={'content-container'}>
			{children}
		</div>
	</div>
);

export default PageTemplate;