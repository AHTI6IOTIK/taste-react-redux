import {ADD_MY_FRIEND, REMOVE_MY_FRIEND, GET_FRIEND_BY_ID} from "../constants/ActionTypes";

export const myFriends = (state = [], {type, ...actions}) => {

	switch (type) {

		case ADD_MY_FRIEND:

			return [
				...state,
				actions
			];

		case REMOVE_MY_FRIEND:

			return [...state.filter(user => user.id !== actions.friendID)];

		case GET_FRIEND_BY_ID:

			return [...state.filter(user => user.id !== actions.friendID)];

		default:
			return state;
	}
};