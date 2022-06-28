import React from "react";
import "./DrawerToggle.css";

interface Props {
    clicked: React.MouseEventHandler; 
}

const DrawerToggle = (props: Props) => (
    // <div  className="Drawer" onClick={props.clicked}>
    <div onClick={props.clicked}> MENU
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggle;