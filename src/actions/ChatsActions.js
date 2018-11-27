import {
    CREATE_CHAT,
    LOGOUT_CHAT,
    REMOVE_CHAT,
    ADD_USER_IN_CHAT,
    REMOVE_USER_AS_CHAT,
    ADD_MESSAGE
} from '../constants/ActionTypes';
import uuid from 'uuidv4';

export let createChat = (userId, chatUsers = []) => ({
    type: CREATE_CHAT,
    chatId: uuid(),
    creatorChat: userId,
    messages: [],
    chatUsers
});

export let logoutChat = (chatId, userId) => ({
    type: LOGOUT_CHAT,
    chatId,
    userId
});

export let removeChat = (chatId) => ({
    type: REMOVE_CHAT,
    chatId
});

export let addUserInChat = (userId, chatId) => ({
    type: ADD_USER_IN_CHAT,
    userId,
    chatId
});

export let removeUserAsChat = (userId, chatId) => ({
    type: REMOVE_USER_AS_CHAT,
    userId,
    chatId
});

export let addMessage = (userId, chatId, message) => ({
    type: ADD_MESSAGE,
    messageId: uuid(),
    creatorMessage: userId,
    createdAt: new Date().toString(),
    message,
    chatId
});