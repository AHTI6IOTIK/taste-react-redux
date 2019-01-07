import React, {Component} from 'react';
import AuthForm from './logInPage/AuthForm';

import styles from './logInPage/style.css';
import connect from "react-redux/es/connect/connect";
import {loginUser, logoutUser, authError} from "../actions/UserActions";

const LogInPage = (props) => {

	let onLoginUser = () => {

			props.onLoginUser(222);

	};

    return (
        <div>
            <div className={'top_block'}>
                <p>aaa</p>
            </div>
            <div className={'bottom_block'}>
                <AuthForm userStatus={props.authUser} onLoginUser={onLoginUser}  />
            </div>
        </div>
    )
};

export default connect(
	(state, props) => ({
		...props,
		myFriends: [...state.myFriends],
		authUser: {...state.authUser}
	}),
	dispatch => ({
		onLogoutUser() {
			dispatch(logoutUser());
		},
		onLoginUser(userID) {
			dispatch(loginUser(userID));
		},
		onErrorAuth(message) {
			dispatch(authError(message));
		}
	})
)(LogInPage);