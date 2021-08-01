import { ProfileActionsType, profileReducer } from "./profile-reducer";
import { dialogsActionsType, dialogsReducer } from "./dialogs-reducer";
import { sidebarActionsType, sidebarReducer } from "./sidebar-reducer";
import { UserReducerActions, usersReducer } from "./users-reducer";
import thunk, { ThunkAction } from "redux-thunk";
import { authActionsType, authReducer } from "./auth-reducer";
import { reducer as formReducer } from "redux-form";
import { appActionsType, appReducer } from "./app-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Action, applyMiddleware, combineReducers, createStore } from "redux";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type AppActionsType =
    | authActionsType
    | dialogsActionsType
    | ProfileActionsType
    | sidebarActionsType
    | appActionsType
    | UserReducerActions;

// export type AppThunkType<
//     A extends Action = AppActionsType,
//     R = void
// > = ThunkAction<R, AppStateType, unknown, A>;

export type AppThunkType<
    A extends Action = AppActionsType,
    R = void
> = ThunkAction<R, AppStateType, unknown, A>;

export type InferActionsTypes<T> = T extends {
    [keys: string]: (...args: any[]) => infer U;
}
    ? U
    : never;

// type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
// export type InferActionTypes<
//     T extends { [key: string]: (...args: any[]) => any }
// > = ReturnType<PropertiesTypes<T>>;

export let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
