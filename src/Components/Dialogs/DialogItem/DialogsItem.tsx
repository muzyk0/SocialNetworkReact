import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

type dialogItemType = {
    name: string
    id: number
}

const DialogItem = (props: dialogItemType) => {
    const path = `/dialogs/${props.id}`
    return (
        <div className={`${s.dialog}`}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>)
}

export default DialogItem;
