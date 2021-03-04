import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Dialogs from './Components/Dialogs/Dialogs';
import {RootStateType} from './redux/state';

export type AppStateType = {
    state: RootStateType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (newText: string) => void
    updateNewDialogMessage: (newText: string) => void
}

const App: React.FC<AppStateType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Sidebar sidebar={props.state.sidebar}/>
                <div className={'app_wrapper_content'}>
                    <Route path='/profile' render={() => <Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                    />}/>

                    <Route path='/dialogs' render={() => <Dialogs
                        dialogPage={props.state.dialogsPage}
                        newMessageText={props.state.dialogsPage.newMessageText}
                        addMessage={props.addMessage}
                        updateNewDialogMessage={props.updateNewDialogMessage}
                    />}/>


                    {/*<Route path='/news' render={() => <News/>}/>*/}
                    {/*<Route path='/music' render={() => <Music/>}/>*/}
                    {/*<Route path='/settings' render={() => <Settings/>}/>*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;