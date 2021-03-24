import {combineReducers, createStore} from 'redux';
import {AddPostActionType, profileReducer, UpdateNewPostTextActionType} from './profile-reducer';
import {AddMessageActionType, dialogsReducer, UpdateNewDialogMessageActionType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type ActionsType = AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewDialogMessageActionType;

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)