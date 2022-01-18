import { actions, InitialStateType } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import { compose, Dispatch } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import React from "react";

type MapStateToPropsType = {
    dialogsPage: InitialStateType;
};
type MapDispatchToPropsType = {
    onSendMessage: (value: string) => void;
};

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessage(value: string) {
            dispatch(actions.sendMessage(value));
        },
    };
};

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
