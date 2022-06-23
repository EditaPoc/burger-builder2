import React, { MouseEventHandler } from "react";
import './BuildControl.css'

export interface Props {
    disabled: boolean;
    added: MouseEventHandler;
    removed: MouseEventHandler;
    label: string;
}

const BuildControl = (props: Props) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button 
            className="Less" onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button 
            className="More" onClick={props.added}>More</button>
    </div>
);

export default BuildControl;