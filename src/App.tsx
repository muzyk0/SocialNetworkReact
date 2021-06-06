import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import {SidebarContainer} from './Components/Sidebar/SidebarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/LoginPage';
import {compose} from 'redux';
import {connect, ConnectedProps, Provider} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import {AppStateType, store} from './redux/store';
import {Preloader} from './Components/common/Preloader/Preloader';

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <SidebarContainer/>
                <div className={'app_wrapper_content'}>
                    <Route path="/login" render={() => <LoginPage/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/users/:userId?" render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    initialized: state.app.initialized
})

const connector = connect(mapStateToProps, {initializeApp})

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connector,
)(App)

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>

    </BrowserRouter>
}

export default SamuraiJSApp

// Types
export type AppPropsType = ConnectedProps<typeof connector>;
type MapStateToProps = {
    initialized: boolean
}