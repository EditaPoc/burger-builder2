import React, { MouseEventHandler } from "react";
import './Button.css';

interface Props {
    clicked: MouseEventHandler;
    btnType: string;
    children: JSX.Element | JSX.Element [] | string;
}

const Button = (props: Props) => (
    <button className={["Button", [props.btnType]].join(" ")}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default Button;