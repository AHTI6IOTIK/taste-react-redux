import {LOGOUT_USER, REGISTER_USER, LOGIN_USER, SET_AUTH_USER, AUTH_ERROR} from "../constants/ActionTypes";
import uuid from "uuidv4";

/**
 * отвечает за авторизацию пользователя
 * @param login
 * @param pass
 * @returns {{type: string, login: *, pass: *}}
 */
export let loginUser = (login, pass) => ({
    type: LOGIN_USER,
    login,
    pass,
});

/**
 * устанавливает авторизацию пользователя
 * @param isAuthorize
 * @param userId
 * @returns {{type: string, isAuthorize: *, userId: *}}
 */
export let setAuthorized = (isAuthorize = null, userId = null) => ({
    type: SET_AUTH_USER,
    isAuthorize,
    userId
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
 * пользователь выходит из аккаунта
 * @param isAuthorize
 * @param userId
 * @returns {{type: string, isAuthorize: *, userId: *}}
 */
export let logoutUser = (isAuthorize = null, userId = null) => ({
    type: LOGOUT_USER,
	isAuthorize,
	userId
});

/**
 * пользователь хочет зарегистрироваться
 * @param userName
 * @param login
 * @param pass
 * @returns {{type: string, userId: *, userName: *, login: *, pass: *, isAuthorize: boolean}}
 */
export let registerUser = (userName, login, pass) => ({
    type: REGISTER_USER,
    userId: uuid(),
    userName,
    login,
    pass,
    isAuthorize: false
});