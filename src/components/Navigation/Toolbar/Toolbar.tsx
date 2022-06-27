import React from "react";
//import { Props } from "../../../hoc/Auxiliary";
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";

interface Props {

}

const Toolbar = (props: Props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;