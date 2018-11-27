import React, {Component, Fragment} from "react";
import Page404 from "../../../screen/Page404";
import {BrowserRouter, NavLink as NavLinkBase, Route, Switch} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {loginUser, logoutUser} from "../../../actions/UsersActions";

const navLinkStyle = {
	padding: 4,
	transition: '0.4s',
	textDecoration: 'none'
};

const navLinkStyleActive = {
	color: 'coral'
};

const NavLink = (props) => (
	<NavLinkBase
		{...props}
		style={navLinkStyle}
		activeStyle={navLinkStyleActive}
	/>
);

export class Menu extends Component {

	constructor() {
		super();

	}

	render () {
		let {authUser, ...props} = this.props,
			link = {title: "Личный кабинет", href: "/cabinet"},
			links = {
				authLink: {title: "Аворизоваться", href: "/auth"},
			};

		if (!authUser.isAuthorize) {

			link = links.authLink;
		}

		return (
			<nav>
				<NavLink to='/' exact>Home</NavLink>
				<NavLink to={link.href} exact>{link.title}</NavLink>
				{
					authUser.isAuthorize && <NavLink to={'/logout'} onClick={() => {props.onLogoutUser()}} exact>{'Выход'}</NavLink>
				}
			</nav>
		)
	}

};


export default connect(
	state => ({
		authUser: {...state.authUser}
	}),
	dispatch => ({
		onLogoutUser() {
			dispatch(logoutUser())
		}
	})
)(Menu);