import React from 'react';
import {connect} from "react-redux";
import {findById} from "../utils/helpers";
import ChatModel from "../models/ChatModel";

const DetaileChat = ({chat, authUserID, ...props}) => {

	chat = new ChatModel(chat);
	console.log(authUserID);
	return (
		<div className='chat-container'>
			<a href="javascript:void(0)" onClick={() => window.history.back()}>Назад</a>
			<div className='messages-container'>
				{
					chat.getMessages().map(function (item) {
						console.log(item);
					})
				}
			</div>
		</div>
	)
};

export default connect(
	(state, props) => ({
		...props,
		authUserID: state.authUser.userID,
		chat: findById(state.chats, 'chatID', parseInt(props.match.params.id))

	}),
)(DetaileChat);