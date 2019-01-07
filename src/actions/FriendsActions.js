import {ADD_MY_FRIEND, REMOVE_MY_FRIEND, GET_FRIEND_BY_ID} from '../constants/ActionTypes';

export const addMyFriend = (model) => ({
	type: ADD_MY_FRIEND,
	model
});

export const getFriendByID = (friendID) => ({
	type: ADD_MY_FRIEND,
	friendID
});