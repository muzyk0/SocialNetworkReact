import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.css';
import {FriendsType, SidebarType} from '../../redux/sidebar-reducer';
import {SidebarPropsType} from './SidebarContainer';


const Sidebar: React.FC<SidebarPropsType> = (props) => {
    return (
        <aside className={s.sidebar}>
            <nav >
                <ul>
                    <li><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></li>
                    <li><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></li>
                    <li><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></li>
                    <li><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></li>
                    <li><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></li>
                </ul>
            </nav>
            <SidebarFriendsBlock friends={props.sidebar.friends}/>
        </aside>
    )
}

const SidebarFriendsBlock: React.FC<SidebarType> = (props) => {

    const friendItem = props.friends.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}/>)

    return (
        <div>
            <h3>Friends</h3>
            <div className={s.friendBlock}>
                {friendItem}
            </div>
        </div>
    )
}

const Friend: React.FC<FriendsType> = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.imgProfilePhoto}/>
            <p className={s.name}>{props.name}</p>
        </div>
    )
}

export default Sidebar;
