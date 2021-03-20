import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.css';
import {FriendsType, SidebarType} from '../../redux/store';
import Sidebar from './Sidebar';
import {StoreType} from '../../redux/redux-store';
import {StoreContext} from '../../redux/StoreContext';

export type PropsType = {
    store: StoreType
}

export const SidebarContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()
                return <Sidebar sidebar={state.sidebar}/>
            }}
        </StoreContext.Consumer>
)

}