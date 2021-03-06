import React, { MouseEventHandler } from "react";
import "./DrawerToggle.css";

interface Props {
    clicked: MouseEventHandler; 
}

const drawerToggle = (props: Props) => (
      <div className="DrawerToggle" onClick={props.clicked}> 
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;