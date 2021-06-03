import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ProfileActionsType, profileReducer} from './profile-reducer';
import {dialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {sidebarActionsType, sidebarReducer} from './sidebar-reducer';
import {UserReducerType, usersReducer} from './users-reducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {authActionsType, authReducer} from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import {appActionsType, appReducer} from './app-reducer';

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppActionsType =
    | authActionsType
    | dialogsActionsType
    | ProfileActionsType
    | sidebarActionsType
    | appActionsType
    | UserReducerType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionsType>

export let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))