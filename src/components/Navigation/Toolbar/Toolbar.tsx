import React from "react";
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

interface Props {
    drawerToggleClicked: React.MouseEventHandler;

}

const toolbar = (props: Props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        {/* <div clicked={props.drawerToggleClicked}>MENU</div> */}
        <Logo />
        <nav  className="DesktopOnly">
            <NavigationItems key={null} type={undefined} props={undefined} />
        </nav>
    </header>
);

export default toolbar;