import React, { MouseEventHandler } from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

interface SideDrawer {
    closed: MouseEventHandler;
    open: boolean;
  }

const sideDrawer = (props: SideDrawer) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClasses.join(" ")}>
            <Logo />
            <nav>
                <NavigationItems key={null} type={undefined} props={undefined} />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;