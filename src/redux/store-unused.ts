import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from './profile-reducer';
import {AddMessageActionType, dialogsReducer, UpdateNewDialogMessageActionType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

 type MessageType = {
    id: number
    message: string
}
 type DialogsType = {
    id: number
    name: string
}
 type PostType = {
    id: number
    message: string
    likesCount: number
}
 type ProfilePostType = {
    newPostText: string
    posts: Array<PostType>
}
 type DialogsPageType = {
    newMessageBody: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
 type FriendsType = {
    id: number
    name: string
}

 type SidebarType = {
    friends: Array<FriendsType>
}
 type RootStateType = {
    profilePage: ProfilePostType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


 type StoreType = {
    _state: RootStateType
    _callSubscribe: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

 type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewDialogMessageActionType;


let storeUnused: StoreType = {
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