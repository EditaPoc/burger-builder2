import React, { MouseEventHandler } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
//import Modal from "../../UI/Modal/Modal";
import Aux from "../../../hoc/Auxiliary";

interface SideDrawer {
    closed: MouseEventHandler;
    open: boolean;
  }

const SideDrawer = (props: SideDrawer) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
};

export default SideDrawer;