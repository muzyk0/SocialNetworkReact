import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import {HashRouter, Route} from 'react-router-dom';
import Dialogs from './Components/Dialogs/Dialogs';
import {ActionsType, StoreType} from './redux/state';

export type AppStateType = {
    store: StoreType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (newText: string) => void
    updateNewDialogMessage: (newText: string) => void
}

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()

    return (
        <HashRouter>
            <div className="app_wrapper">
                <Header/>
                {/*<Sidebar sidebar={props.store._state.sidebar}/>*/}
                <Sidebar sidebar={state.sidebar}/>
                <div className={'app_wrapper_content'}>
                    <Route path='/profile' render={() => <Profile
                        profilePage={state.profilePage}
                        dispatch={props.dispatch}
                    />}/>

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogPage={state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;