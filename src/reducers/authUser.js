import {LOGOUT_USER, SET_AUTH_USER, AUTH_ERROR} from '../constants/ActionTypes';

export const authUser = (state = {}, {type, ...actions}) => {

	let {isAuthorize, userId, errMessage} = actions;

	switch (type) {

		case SET_AUTH_USER:

			return {
				...state,
				isAuthorize, userId, errMessage
			};

		case LOGOUT_USER:

			return {
				...state,
				isAuthorize, userId, errMessage
			};

		case AUTH_ERROR:

			return {
				...state,
				isAuthorize, userId, errMessage
			};

		default:
			return state;
	}
};