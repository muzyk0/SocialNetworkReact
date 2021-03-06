let rerenderEntireTree = () => {
    console.log('State changed')
}

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

let state: RootStateType = {
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
}

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}
export const addMessage = () => {
    const newMessage: MessageType = {
        id: new Date().getTime(),
        message: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree();
}
export const updateNewDialogMessage = (newText: string) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

export default state