import MyFriend from '../models/MyFriendModel'
import ChatModel from "../models/ChatModel";

const converterToStore = (arFriends) => {

	let myFriends = arFriends.map(friend => new MyFriend(friend));

	return (arChats) => {

		let chats = arChats.map(chat => new ChatModel(chat));

		return {
			myFriends,
			chats
		};
	}
};

export default converterToStore;
