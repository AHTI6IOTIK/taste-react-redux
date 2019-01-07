import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import storeFactory from './reducers/storeFactory';
import App from './App';

const store = storeFactory();

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);