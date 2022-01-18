import React from "react";
import "./App.css";
import { HashRouter, Route, withRouter } from "react-router-dom";
import { SidebarContainer } from "./Components/Sidebar/SidebarContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import { compose } from "redux";
import { connect, ConnectedProps, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { AppStateType, store } from "./redux/store";
import { Preloader } from "./Components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const LoginPage = React.lazy(() => import("./Components/Login/LoginPage"));
const ProfileContainer = React.lazy(
    () => import("./Components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(
    () => import("./Components/Dialogs/DialogsContainer")
);

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />;
        }

        return (
            <div className="app_wrapper">
                <HeaderContainer />
                <SidebarContainer />
                <div className={"app_wrapper_content"}>
                    <Route path="/login" render={withSuspense(LoginPage)} />
                    <Route
                        path="/profile/:userId?"
                        render={withSuspense(ProfileContainer)}
                    />

                    <Route
                        path="/dialogs"
                        render={withSuspense(DialogsContainer)}
                    />
                    <Route
                        path="/users/:userId?"
                        render={() => <UsersContainer />}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    initialized: state.app.initialized,
});

const connector = connect(mapStateToProps, { initializeApp });

export const AppContainer = compose<React.ComponentType>(
    withRouter,
    connector
)(App);

const SamuraiJSApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    );
};

export default SamuraiJSApp;

// Types
export type AppPropsType = ConnectedProps<typeof connector>;
type MapStateToProps = {
    initialized: boolean;
};
