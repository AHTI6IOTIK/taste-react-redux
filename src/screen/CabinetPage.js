import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import {CabinetPage} from './cabinetPage/CabinetPage';
import ChatList from './ChatListPage';
import ChatPage from './ChatPage';
import {createChat} from '../actions/ChatsActions';

import LeftMenu from '../components/ui/LeftMenu';

import styles from './cabinetPage/styles.scss';

const Profile = ({match}) => (<div><div>профидб{console.log(match)}</div></div>);


const Cabinet = ({authUser, ...props}) => {

	if (!authUser.isAuthorize) {

		return <div>You needs to authorize</div>
	}

	return (
		<div className={'cabinetPage-content'}>
			<Route component={LeftMenu} />
			<Route exact path="/cabinet" component={CabinetPage}/>
			<Route path="/cabinet/chat-list" component={ChatList}/>
			<Route path="/cabinet/profile" component={Profile}/>
			<Route path="/cabinet/chat/:id" component={ChatPage}/>
		</div>
	)
};

export default connect(
	(state, props) => ({
		...props,
		authUser: {...state.authUser}

	}),
	dispatch => ({
		createChat(userID, chatUsers) {
			dispatch(createChat(userID, chatUsers))
		}
	})
)(Cabinet);