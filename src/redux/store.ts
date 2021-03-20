import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from './profileReducer';
import {AddMessageActionType, dialogsReducer, UpdateNewDialogMessageActionType} from './dialogsReducer';
import {sidebarReducer} from './sidebarReducer';

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
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePostType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export type StoreType = {
    _state: RootStateType
    _callSubscribe: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewDialogMessageActionType;


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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscribe();

    }
}

export default store