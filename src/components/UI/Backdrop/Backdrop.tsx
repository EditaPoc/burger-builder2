import React, { MouseEventHandler } from "react";
import './Backdrop.css';

export interface Props {
    [x: string]: MouseEventHandler<Element>;
    show: boolean;
    clicked: MouseEventHandler;
}
const Backdrop = (props: Props) => 
    props.show ? <div className="Backdrop" onClick={props.clicked}></div> : null;

export default Backdrop;