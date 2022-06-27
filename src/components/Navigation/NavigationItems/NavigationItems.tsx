import React, { ReactNode } from "react";
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props: ReactNode) => (
    <ul className="NavigationItems">
       <NavigationItem link="/" active>Burger Builder</NavigationItem>
       <NavigationItem link="/" active={false}>Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;