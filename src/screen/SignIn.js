import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AuthForm from './signIn/AuthForm';

import styles from './signIn/style.css';
import connect from "react-redux/es/connect/connect";
import {loginUser, logoutUser, authError} from "../actions/UsersActions";

const SignIn = (props) => {
	console.log(props);
	let onLoginUser = (log, pass) => {

			props.onErrorAuth('Неверный логин или пароль');

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
	state => ({
		users: [...state.users],
		authUser: {...state.authUser}
	}),
	dispatch => ({
		onLogoutUser(id) {
			dispatch(logoutUser(id));
		},
		onLoginUser(login, pass) {
			dispatch(loginUser(login, pass));
		},
		onErrorAuth(message) {
			dispatch(authError(message));
		}
	})
)(SignIn);