const converterToStore = (arFriends) => {

	let myFriends = arFriends.map(friend => friend.toJSON());

	return (arChats) => {

		let chats = arChats.map(chat => chat.toJSON());

		return JSON.stringify({
			myFriends,
			chats
		});
	}
};

export default converterToStore;
