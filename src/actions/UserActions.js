import {LOGOUT_USER, LOGIN_USER, AUTH_ERROR} from "../constants/ActionTypes";

/**
 *
 * @param userID
 * @returns {{type: string, isAuthorize: boolean, userID: *}}
 */
export let loginUser = (userID) => ({
    type: LOGIN_USER,
	isAuthorize: true,
	userID,
});

/**
 *
 * @param errMessage
 * @returns {{type: string, errMessage: *}}
 */
export let authError = (errMessage) => ({
	type: AUTH_ERROR,
	errMessage,
});

/**
 *
 * @returns {{type: string, isAuthorize: null, userId: null}}
 */
export let logoutUser = () => ({
    type: LOGOUT_USER,
	isAuthorize: null,
	userID: null
});