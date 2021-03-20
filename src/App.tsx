import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import {HashRouter, Route} from 'react-router-dom';
import {ActionsType} from './redux/store';
import {store} from './redux/redux-store';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {SidebarContainer} from './Components/Sidebar/SidebarContainer';

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

const App = () => {
    return (
        <HashRouter>
            <div className="app_wrapper">
                <Header/>
                <SidebarContainer/>
                <div className={'app_wrapper_content'}>
                    <Route path='/profile' render={() => <Profile/>}/>

                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;