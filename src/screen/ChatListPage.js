import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import styles from './chatListPage/styles.scss';

//Actions creator
import {createChat} from '../actions/ChatsActions';

import {ChatItem} from './chatListPage/ChatItem';
import ChatModel from '../models/ChatModel';
import AuthUserModel from '../models/AuthUserModel';

class ChatListPage extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: new AuthUserModel(),
			chats: [...this.props.chats.map(chat => new ChatModel(chat))]
		}
	}

	render () {

		return <Fragment>
			{
				(this.state.chats.length > 0) ?
					(<ul className={'chats-list'}>
						{
							this.state.chats.map(chat => {

								let isCreator = this.state.user.getUserID() === chat.getCreatorChat();

								return <ChatItem key={chat.getChatID()} chatData={chat} isCreator={isCreator} />
							})
						}
					</ul>) :
					<div>
						<p>Увас нет чатов</p>
					</div>
			}
		</Fragment>
	}
}


export default connect(
	(state, props) => ({
		...props,
		user: {...state.authUser},
		chats: [...state.chats]
	}),
	dispatch => ({
		addNewChat(userID, arUsers) {
			dispatch(createChat(userID, arUsers))
		}
	})
)(ChatListPage)