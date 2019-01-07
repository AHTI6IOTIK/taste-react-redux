export default class User {

	_fields = {
		userID: null,
		name: null,
		lastName: null,
		birthDate: null,
	};

	constructor(data) {

		if (data) {

			this.setUserID(data.id);
			this.setName(data.name);
			this.setLastName(data.lastName);
			this.setBirthDate(data.birthDate);
		}
	}

	setUserID(id) {

		this._fields.userID = id;
	}

	setName(name) {

		this._fields.name = name;
	}

	setLastName(lastName) {

		this._fields.lastName = lastName;
	}

	setBirthDate(date) {

		this._fields.birthDate = date;
	}

	getUserID() {

		return this._fields.userID;
	}

	getName() {

		return this._fields.name;
	}

	getLastName() {

		return this._fields.lastName;
	}

	getBirthDate() {

		return this._fields.birthDate;
	}

	setUserChats(chats) {

	}
}