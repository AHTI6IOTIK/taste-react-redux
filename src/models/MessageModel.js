export default class MessageModel {

	_fields = {
		messageID: null,
		creatorMessage: null,
		message: null,
		createdAt: null,
	};

	constructor(data) {

		if (data) {
			this.setMessageID(data.messageID);
			this.setCreatorMessage(data.creatorMessage);
			this.setMessage(data.message);
			this.setCreatedAt(data.createdAt);
		}
	}

	toJSON() {

		return {
			messageID: this.getMessageID(),
			creatorMessage: this.getCreatorMessage(),
			message: this.getMessage(),
			createdAt: this.getCreatedAt()
		}
	}

	setMessageID(messageID) {

		this._fields.messageID = messageID;
	}

	setCreatorMessage(creatorMessage) {

		this._fields.creatorMessage = creatorMessage;
	}

	setMessage(message) {

		this._fields.message = message;
	}

	setCreatedAt(createdAt) {

		this._fields.createdAt = createdAt;
	}

	getMessageID() {

		return this._fields.messageID;
	}

	getCreatorMessage() {

		return this._fields.creatorMessage;
	}

	getMessage() {

		return this._fields.message;
	}

	getCreatedAt() {

		return this._fields.createdAt;
	}

	isMessageCreator(userID) {

		return userID === this._fields.creatorMessage;
	}

}