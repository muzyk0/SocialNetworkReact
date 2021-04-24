import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {SidebarContainer} from './Components/Sidebar/SidebarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/Login/Login';

const App = () => {
    return (
        <HashRouter>
            <div className="app_wrapper">
                <HeaderContainer />
                <SidebarContainer/>
                <div className={'app_wrapper_content'}>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;