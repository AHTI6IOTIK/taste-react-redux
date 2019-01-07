import MessageModel from './MessageModel';

export default class ChatModel {

	_fields = {
		chatID: null,
		creatorChat: null,
		chatUsers: null,
		messages: null
	};

	constructor(data) {

		if (data) {

			this.setChatID(data.chatID);
			this.setCreatorChat(data.creatorChat);
			this.setChatUsers(data.chatUsers);
			this.setMessages(data.messages || []);
		}
	}

	toJSON() {

		return {
			chatID: this.getChatID(),
			creatorChat: this.getCreatorChat(),
			chatUsers: this.getChatUsers(),
			messages: this.getMessages()
		}
	}

	setChatID(chatID) {

		this._fields.chatID = chatID;
	}

	setCreatorChat(creatorChat) {

		this._fields.creatorChat = creatorChat;
	}

	setChatUsers(chatUsers) {

		this._fields.chatUsers = chatUsers;
	}

	setMessages(messages) {

		if (messages.length > 0) {

			messages = messages.map(message => new MessageModel(message));
		}

		this._fields.messages = messages;
	}

	getChatID() {

		return this._fields.chatID;
	}

	getCreatorChat() {

		return this._fields.creatorChat;
	}

	getChatUsers() {

		return this._fields.chatUsers;
	}

	getMessages() {

		return this._fields.messages;
	}

	getLastMessage() {

		return this._fields.messages[this._fields.messages.length - 1] ? this._fields.messages[this._fields.messages.length - 1].getMessage() : 'В чате нет переписки';
	}

	isChatCreator(userID) {

		return userID === this._fields.creatorChat;
	}


}