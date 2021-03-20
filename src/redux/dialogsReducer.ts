import {ActionsType, DialogsPageType, MessageType} from './store';

const initialState:DialogsPageType = {
    newMessageBody: '',
    dialogs: [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Nasty',},
        {id: 3, name: 'Vova',},
        {id: 4, name: 'Viktor',},
        {id: 5, name: 'Olya',},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Dimych'},
    ]
}

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_DIALOG_MESSAGE'

export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyAC = (messageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newText: messageText} as const
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageBody,
            }
            const trimmedText = state.newMessageBody.trim()
            if (trimmedText) {
                state.messages.push(newMessage)
                state.newMessageBody = ''
            }
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state
        default:
            return state
    }
}