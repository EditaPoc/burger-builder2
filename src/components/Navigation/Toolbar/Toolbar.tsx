import React from "react";
//import { Props } from "../../../hoc/Auxiliary";
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

interface Props {
    drawerToggleClicked: React.MouseEventHandler;
    clicked: React.MouseEventHandler;

}

const Toolbar = (props: Props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        {/* <div clicked={props.drawerToggleClicked}>MENU</div> */}
        <Logo />
        <nav  className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;