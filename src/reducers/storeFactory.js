import {createStore, combineReducers, applyMiddleware} from 'redux';
import {myFriends} from './myFriends';
import {chats} from './chats';
import {authUser} from './authUser';
import initialData from './initData';
import {isJSON, getJSON} from "../utils/helpers";
import converterToStore from '../utils/converterToStore';
import converterToSaver from '../utils/converterToSaver';

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
    let result = next(action);

    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initialState = initialData) =>
	applyMiddleware(logger, saver)(createStore)(
		combineReducers({authUser, myFriends, chats}),
		(
			localStorage['redux-store'] ?
				JSON.parse(localStorage['redux-store']) : initialData
		)
	);

export default storeFactory;

