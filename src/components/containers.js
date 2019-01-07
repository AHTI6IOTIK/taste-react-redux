import React, {Component}from 'react';
import {connect} from 'react-redux';
import Menu from './../components/ui/Menu';
import {logoutUser} from './../actions/UserActions';

export const MainMenuContainer = connect(
	state => ({
		users: [...state.users]
	}),
	dispatch =>
		({
			onLogoutUser(id) {
				dispatch(logoutUser(id))
			}
		})
)(Menu);