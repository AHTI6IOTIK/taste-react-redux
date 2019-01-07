import React, {Component, Fragment} from "react";
import {NavLink as BaseLink} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {loginUser, logoutUser} from "../../../actions/UserActions";

const navLinkStyle = {
	padding: 4,
	transition: '0.4s',
	textDecoration: 'none'
};

const navLinkStyleActive = {
	color: 'coral'
};


const NavLink = (props) => (

	<BaseLink
		style={navLinkStyle}
		activeStyle={navLinkStyleActive}
		{...props}
	/>
);

export class Menu extends Component {

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
			<nav className={'main-menu'}>
				<NavLink exact to='/'>Home</NavLink>
				<NavLink to={link.href}>{link.title}</NavLink>
				{
					authUser.isAuthorize && <NavLink to={'/logout'} onClick={() => {props.onLogoutUser()}}>{'Выход'}</NavLink>
				}
			</nav>
		)
	}

}

export default connect(
	(state, props) => ({
		...props,
		authUser: {...state.authUser}
	}),
	dispatch => ({
		onLogoutUser() {
			dispatch(logoutUser())
		}
	})
)(Menu);