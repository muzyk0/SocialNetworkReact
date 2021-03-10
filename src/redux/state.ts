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
    newMessageText: string
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
export type SidebarFriendsType = {
    sidebar: SidebarType
}
export type RootStateType = {
    profilePage: ProfilePostType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let store = {
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
            newMessageText: '',
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
    getState() {
        return this._state
    },
    _callSubscribe() {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = '';
        this._callSubscribe()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribe();
    },
    addMessage() {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: this._state.dialogsPage.newMessageText,
        }
        const trimmedText = this._state.dialogsPage.newMessageText.trim()
        if (trimmedText) {
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscribe();
        }
    },
    updateNewDialogMessage(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscribe();
    },
    subscribe(observer: () => void) {
        this._callSubscribe = observer
    }
}

export default store