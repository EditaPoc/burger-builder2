import React from "react";
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props:  JSX.Element) =>(
    <ul className="NavigationItems">
       <NavigationItem link="/">Burger Builder</NavigationItem>
       <NavigationItem link="/orders" active={false}>Orders</NavigationItem>
    </ul>
);

export default navigationItems;