import React, { MouseEventHandler } from "react";
import './Button.css';

interface Props {
    disabled: boolean | undefined;
    clicked: MouseEventHandler;
    btnType: string;
    children: JSX.Element | JSX.Element [] | string;
    
}

const Button = (props: Props) => (
    <button 
        disabled={props.disabled}
        className={["Button", [props.btnType]].join(" ")}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default Button;