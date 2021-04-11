import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {SidebarContainer} from './Components/Sidebar/SidebarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <SidebarContainer/>
                <div className={'app_wrapper_content'}>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;