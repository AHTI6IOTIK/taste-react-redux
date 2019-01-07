const initialData = {
	authUser: {
		isAuthorize: null,
		userID: null,
        errorMessage: null
	},
    myFriends : [
        {
            userID: 111,
            userName: 'myName`s terminator',
            nickName: 'LeonardNemoy',
            isOnline: false
        },
        {
			userID: 222,
			userName: 'Petro',
			lastName: 'Ivanov',
			birthDate: '25.05.2005',
			nickName: 'IsTerminatorNemo',
			isOnline: true
        }
    ],
    chats: [
        {
            chatID: 111,
            creatorChat: 111,
            chatUsers: [111, 222],
            messages: [
                {
                    messageID: 545454,
                    creatorMessage: 111,
                    message: 'user message111',
                    createdAt: '20.12.2018',
                },
                {
                    messageID: 454545,
                    creatorMessage: 222,
                    message: 'user message222',
                    createdAt: '20.12.2018',
                }
            ],
        },
        {
            chatID: 222,
            creatorChat: 222,
            chatUsers: [111, 222],
            messages: [
                {
                    messageID: 545454,
                    creatorMessage: 111,
                    message: 'user message2221',
                    createdAt: '20.12.2018',
                },
                {
                    messageID: 454545,
                    creatorMessage: 222,
                    message: 'user message111',
                    createdAt: '20.12.2018',
                }
            ],
        }
    ]
};

export default initialData;