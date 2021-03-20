import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import {HashRouter, Route} from 'react-router-dom';
import {ActionsType} from './redux/store';
import {store} from './redux/redux-store';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';

// export type AppStateType = {
//     store: StoreType
//     addPost: () => void
//     addMessage: () => void
//     updateNewPostText: (newText: string) => void
//     updateNewDialogMessage: (newText: string) => void
// }

type PropsType = {
    store: typeof store
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = (props) => {

    const state = props.store.getState()

    return (
        <HashRouter>
            <div className="app_wrapper">
                <Header/>
                <Sidebar sidebar={state.sidebar}/>
                <div className={'app_wrapper_content'}>
                    <Route path='/profile' render={() => <Profile store={props.store}/>}/>

                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;