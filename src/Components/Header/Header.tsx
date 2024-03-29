import React from "react";
import logo from "./logo.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { HeaderPropsType } from "./HeaderContainer";

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="" />

            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login} -{" "}
                        <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={"/Login"}>Login</NavLink>
                )}
            </div>
        </header>
    );
};
