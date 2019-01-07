import React, {Component} from "react";
import {NavLink} from "react-router-dom";

const activeStyleLink = {
	transition: '4s',
	color: 'green'
};

export default class LeftMenu extends Component {

	render () {

		let {match} = this.props;

		return (
			<div className={'left-side-menu'}>
				<NavLink activeStyle={activeStyleLink} to={'/cabinet/profile'}>Профиль</NavLink>
				<NavLink activeStyle={activeStyleLink} to={'/cabinet/chat-list'}>Чаты</NavLink>
				<NavLink activeStyle={activeStyleLink} to={'/cabinet/friends'}>Друзья</NavLink>
			</div>
		)
	}
};