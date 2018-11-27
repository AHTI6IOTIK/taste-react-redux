const initialData = {
    users : [
        {
            userId: 111,
            userName: 'myName`s terminator',
            login: 'user111',
            pass: 'pass111',
            isAuthorize: false
        },
        {
            userId: 222,
            userName: 'i`m very fun',
            login: 'user222',
            pass: 'pass222',
            isAuthorize: false
        }
    ],
    chats: [
        {
            chatId: 111,
            creatorChat: 111,
            chatUsers: [111, 222],
            messages: [
                {
                    messageId: 545454,
                    creatorMessage: 111,
                    message: 'user message',
                    createdAt: '20.12.2018',
                },
                {
                    messageId: 454545,
                    creatorMessage: 222,
                    message: 'user message',
                    createdAt: '20.12.2018',
                }
            ],
        },
        {
            chatId: 222,
            creatorChat: 222,
            chatUsers: [111, 222],
            messages: [
                {
                    messageId: 545454,
                    creatorMessage: 111,
                    message: 'user message',
                    createdAt: '20.12.2018',
                },
                {
                    messageId: 454545,
                    creatorMessage: 222,
                    message: 'user message',
                    createdAt: '20.12.2018',
                }
            ],
        }
    ]
};

export default initialData;