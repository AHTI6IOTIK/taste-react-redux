import {
    CREATE_CHAT,
    LOGOUT_CHAT,
    REMOVE_CHAT,
    ADD_USER_IN_CHAT,
    REMOVE_USER_AS_CHAT,
    ADD_MESSAGE
} from '../constants/ActionTypes';
import uuid from 'uuidv4';

export let createChat = (userID, chatUsers = []) => ({
    type: CREATE_CHAT,
    chatID: uuid(),
    creatorChat: userID,
    messages: [],
    chatUsers
});

export let logoutChat = (chatID, userID) => ({
    type: LOGOUT_CHAT,
    chatID,
    userID
});

export let removeChat = (chatID) => ({
    type: REMOVE_CHAT,
    chatID
});

export let addUserInChat = (userID, chatID) => ({
    type: ADD_USER_IN_CHAT,
    userID,
    chatID
});

export let removeUserAsChat = (userID, chatID) => ({
    type: REMOVE_USER_AS_CHAT,
    userID,
    chatID
});

export let addMessage = (userID, chatID, message) => ({
    type: ADD_MESSAGE,
    messageId: uuid(),
    creatorMessage: userID,
    createdAt: new Date().toString(),
    message,
    chatID
});