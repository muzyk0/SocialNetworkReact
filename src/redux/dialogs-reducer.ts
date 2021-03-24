import {ActionsType} from './redux-store';

type MessageType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}


const initialState = {
    newMessageBody: '',
    dialogs: [
        {id: 1, name: 'Dimych',},
        {id: 2, name: 'Nasty',},
        {id: 3, name: 'Vova',},
        {id: 4, name: 'Viktor',},
        {id: 5, name: 'Olya',},
    ] as DialogsType[],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Dimych'},
    ] as MessageType[]
}

export type DialogsInitialStateType = typeof initialState

export const SEND_MESSAGE = 'SEND-MESSAGE'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_DIALOG_MESSAGE'

export type AddMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewDialogMessageActionType = ReturnType<typeof updateNewMessageBodyAC>

export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyAC = (messageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: messageText} as const
}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: ActionsType): DialogsInitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageBody,
            }
            const trimmedText = state.newMessageBody.trim()
            if (trimmedText) {
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageBody: ''
                }
            }
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.body}

        default:
            return state
    }
}