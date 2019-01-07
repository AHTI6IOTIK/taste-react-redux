import React from 'react';
import {Link} from "react-router-dom";

export const ChatItem = ({style, chatData, isCreator}) => {

	return (
		<li className={'chat-item'} style={style}>
			<Link to={'/cabinet/chat/'+chatData.getChatID()} >
				<div className={'chat-item--msg'}>{chatData.getLastMessage()}</div>
			</Link>

		</li>
	);
};