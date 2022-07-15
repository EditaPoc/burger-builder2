import React from "react";
import { NavLink } from "react-router-dom";

import './NavigationItem.css';

export interface Props {
    link: string;
    active?: boolean;
    children: JSX.Element | JSX.Element[] | string;
}

const navigationItem = (props: Props) => (
    <li className="NavigationItem">
        <NavLink 
            to={props.link}
            exact
            activeClassName="active">
                {props.children}
        </NavLink>
    </li>
);

export default navigationItem;