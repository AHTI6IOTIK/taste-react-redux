export default class User {

	_fields = {
		userID: null,
		userName: null,
		lastName: null,
		birthDate: null,
		nickName: null,
		isOnline: null
	};

	constructor(data) {

		if (data) {

			this.setUserID(data.userID);
			this.setUserName(data.userName);
			this.setLastName(data.lastName);
			this.setBirthDate(data.birthDate);
			this.setNickName(data.nickName);
			this.setIsOnline(data.isOnline);
		}
	}

	toJSON() {

		return {
			userID: this.getUserID(),
			userName: this.getUserName(),
			lastName: this.getLastName(),
			birthDate: this.getBirthDate(),
			nickName: this.getNickName(),
			isOnline: this.isOnline()
		}
	}

	setUserID(id) {

		this._fields.userID = id;
	}

	setUserName(name) {

		this._fields.name = name;
	}

	setLastName(lastName) {

		this._fields.lastName = lastName;
	}

	setBirthDate(date) {

		this._fields.birthDate = date;
	}

	setNickName(nickName) {

		this._fields.nickName = nickName;
	}

	setIsOnline(isOnline) {

		this._fields.isOnline = isOnline;
	}

	getUserID() {

		return this._fields.userID;
	}

	getUserName() {

		return this._fields.userName;
	}

	getLastName() {

		return this._fields.lastName;
	}

	getBirthDate() {

		return this._fields.birthDate;
	}

	getNickName() {

		return this._fields.nickName;
	}

	isOnline() {

		return this._fields.isOnline;
	}
}