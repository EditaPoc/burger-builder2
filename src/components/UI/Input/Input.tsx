import React, { HTMLInputTypeAttribute, MouseEventHandler } from "react";

import "./Input.css";

export type Inputtype = 'text' | 'email';

interface InputProps {
    options: {};
    // inputtype: HTMLInputTypeAttribute;
    label: string;
    // name: string;
    // placeholder: string;
    // type?: Inputtype;
    elementType: string;
    elementConfig: object;
    value: string;
    changed: (event: any) => void;
}
const input = (props: InputProps) => {
    let inputElement= null;
    console.log(inputElement);
    switch (props.elementType) {
        case ( 'input'):
            inputElement = <input 
                className="InputElement" 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
            <select 
                className="InputElement" 
                value={props.value}
                onChange={props.changed}> 
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
                ); 
            break;
        default:
            inputElement = <input 
                className="InputElement" 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />;
                     
    }

    return (
        <div className="Input">
        <label className="LabelInput">{props.label}</label>
        {inputElement}
    </div>
    );
   
}

export default input;