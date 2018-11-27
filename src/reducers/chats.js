import * as Types from "../constants/ActionTypes";

export const chats = (state = [], {type, ...actions}) => {
	switch (type) {

		case Types.CREATE_CHAT:
			return [
				...state,
				actions
			];

		case Types.ADD_MESSAGE:
			return state.map(chat => {

				if(chat.chatId === actions.chatId) {

					return {
						...chat,
						messages: chat.messages.concat(actions)
					}
				}

				return chat;
			});

		default:
			return state;
	}
};