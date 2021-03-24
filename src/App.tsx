import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import {HashRouter, Route} from 'react-router-dom';
import {DialogsContainer} from './Components/Dialogs/DialogsContainer';
import {SidebarContainer} from './Components/Sidebar/SidebarContainer';
import {UsersContainer} from './Components/Users/UsersContainer';

const App = () => {
    return (
        <HashRouter>
            <div className="app_wrapper">
                <Header/>
                <SidebarContainer/>
                <div className={'app_wrapper_content'}>
                    <Route path='/profile' render={() => <Profile/>}/>

                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/users' render={() => <UsersContainer />}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;