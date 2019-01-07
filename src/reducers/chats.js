import {CREATE_CHAT, ADD_MESSAGE} from "../constants/ActionTypes";

export const chats = (state = [], {type, ...actions}) => {
	switch (type) {

		case CREATE_CHAT:
			return [
				...state,
				actions
			];

		case ADD_MESSAGE:
			return state.map(chat => {

				if(chat.chatId === actions.chatId) {

					return {
						...chat,
						messages: [
							...chat.messages,
							...actions
						]
					}
				}

				return chat;
			});

		default:
			return state;
	}
};