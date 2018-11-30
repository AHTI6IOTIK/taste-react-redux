import * as Types from "../constants/ActionTypes";

export const users = (state = [], {type, ...actions}) => {

	switch (type) {
		case Types.REGISTER_USER:
			return [
				...state,
				actions
			];

		case Types.LOGIN_USER:

			return state.map(user => {

				if(user.login === actions.login && user.pass === actions.pass) {
					return {
						...user,
						isAuthorize: true
					}
				}

				return user
			});

		default:
			return state;
	}
};