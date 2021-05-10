export const SEND_MESSAGE = 'SEND-MESSAGE'

type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

const initialState = {
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

/*export type AddMessageActionType = ReturnType<typeof sendMessageAC>
export type UpdateNewDialogMessageActionType = ReturnType<typeof updateNewMessageBodyAC>*/
export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: dialogsActionsType): DialogsInitialStateType => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.value,
            }
            const trimmedText = action.value.trim()
            if (trimmedText) {
                return {
                    ...state,
                    messages: [...state.messages, newMessage],
                }
            }
            return state
        default:
            return state
    }
}


export type dialogsActionsType = ReturnType<typeof sendMessageAC>

export const sendMessageAC = (value: string) => {
    return {type: SEND_MESSAGE, value} as const
}
