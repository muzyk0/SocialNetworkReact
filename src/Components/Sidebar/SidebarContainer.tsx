import Sidebar from "./Sidebar";
import { AppStateType } from "../../redux/store";
import { connect } from "react-redux";
import { SidebarType } from "../../redux/sidebar-reducer";

type MapStateToPropsType = {
    sidebar: SidebarType;
};
type MapDispatchToPropsType = {};

export type SidebarPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        sidebar: state.sidebar,
    };
};
const mapDispatchToProps = () => {
    return {};
};

export const SidebarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);
