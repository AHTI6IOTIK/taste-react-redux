import {createStore, combineReducers, applyMiddleware} from 'redux';
import {users} from './users';
import {chats} from './chats';
import {authUser} from './authUser';
import initialData from './initData';

import {setAuthorized} from '../actions/UsersActions';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes'

const logger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('prev action', action);

    result = next(action);

    console.log('next state', store.getState());
    console.groupEnd();
};

const saver = store => next => action => {
    let result = next(action), {users} = store.getState();

    // if (action.type === LOGIN_USER) {
	//
    //     for(let user of users) {
	//
    //         if (user.login === action.login && user.pass === action.pass) {
	//
    //             store.dispatch(setAuthorized(true, user.userId));
    //         }
    //     }
    // } else if (action.type === LOGOUT_USER) {
	//
    //     store.dispatch(setAuthorized());
    // }

    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initialState = initialData) =>
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({users, authUser, chats}),
		(
			localStorage['redux-store'] ?
				JSON.parse(localStorage['redux-store']) : initialData
		)
	);

export default storeFactory;

