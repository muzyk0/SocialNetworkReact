export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePostType = {
    newPostText: string
    posts: Array<PostType>
}
export type DialogsPageType = {
    newMessageBody: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type FriendsType = {
    id: number
    name: string
}
export type SidebarType = {
    sidebar: SidebarFriends
}
export type SidebarFriends = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePostType
    dialogsPage: DialogsPageType
    sidebar: SidebarFriends
}


export type StoreType = {
    _state: RootStateType
    _callSubscribe: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
type AddPostActionType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
type AddMessageActionType = ReturnType<typeof sendMessageAC>
type UpdateNewDialogMessageActionType = ReturnType<typeof updateNewMessageBodyAC>

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewDialogMessageActionType;
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_DIALOG_MESSAGE'

export const addPostActionCreator = (postText: string) => {
    return {type: ADD_POST, postText: postText} as const
}
export const updateNewPostTextActionCreator = (postText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: postText} as const
}
export const sendMessageAC = () => {
    return {type: SEND_MESSAGE} as const
}
export const updateNewMessageBodyAC = (messageText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newText: messageText} as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {
                    id: 1,
                    message: 'Good this site',
                    likesCount: 10
                },
                {
                    id: 1,
                    message: 'Good this site',
                    likesCount: 10
                }
            ],
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dimych',},
                {id: 2, name: 'Nasty',},
                {id: 3, name: 'Vova',},
            ]
        }
    },
    _callSubscribe() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscribe = observer
    },
    dispatch(action) {
        // if (action.type === ADD_POST) {
        //     const newPost: PostType = {
        //         id: new Date().getTime(),
        //         message: action.postText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscribe()
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscribe();
        // } else if (action.type === SEND_MESSAGE) {
        //     const newMessage: MessageType = {
        //         id: new Date().getTime(),
        //         message: this._state.dialogsPage.newMessageBody,
        //     }
        //     const trimmedText = this._state.dialogsPage.newMessageBody.trim()
        //     if (trimmedText) {
        //         this._state.dialogsPage.messages.push(newMessage)
        //         this._state.dialogsPage.newMessageBody = ''
        //         this._callSubscribe();
        //     }
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.newText;
        //     this._callSubscribe();
        // }

        switch (action.type) {
            case ADD_POST:
                const newPost: PostType = {
                    id: new Date().getTime(),
                    message: action.postText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = '';
                this._callSubscribe()
                break
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscribe();
                break
            case SEND_MESSAGE:
                const newMessage: MessageType = {
                    id: new Date().getTime(),
                    message: this._state.dialogsPage.newMessageBody,
                }
                const trimmedText = this._state.dialogsPage.newMessageBody.trim()
                if (trimmedText) {
                    this._state.dialogsPage.messages.push(newMessage)
                    this._state.dialogsPage.newMessageBody = ''
                    this._callSubscribe();
                }
                break
            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.newText;
                this._callSubscribe();
                break
        }
    }
}

export default store