import {LOGOUT_USER, LOGIN_USER, AUTH_ERROR} from '../constants/ActionTypes';

export const authUser = (state = {}, {type, ...actions}) => {

	switch (type) {

		case LOGIN_USER:

			return {
				...state,
				...actions
			};

		case LOGOUT_USER:

			return {
				...state,
				...actions
			};

		case AUTH_ERROR:

			return {
				...state,
				...actions
			};

		default:
			return state;
	}
};