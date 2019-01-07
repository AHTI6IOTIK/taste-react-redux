export default class AuthUserModel {

	_fields = {
		isAuthorize: null,
		userID: null,
		errorMessage: null
	};

	constructor(data) {

		if (data) {

			this.setIsAuthorize(data.isAuthorize);
			this.setUserID(data.userID);
			this.setErrMsg(data.errorMessage);
		}
	}

	toJSON() {

		return {
			isAuthorize: this.isAuthorize(),
			userID: this.getUserID(),
			errorMessage: this.getErrorMessage()
		}
	}

	setIsAuthorize(isAuthorize) {

		this._fields.isAuthorize = isAuthorize;
	}

	setUserID(userID) {

		this._fields.userID = userID;
	}

	setErrMsg(errorMessage) {

		this._fields.errorMessage = errorMessage;
	}

	isAuthorize() {

		return this._fields.isAuthorize;
	}

	getUserID() {

		return this._fields.userID;
	}

	getErrorMessage() {

		return this._fields.errorMessage;
	}
}