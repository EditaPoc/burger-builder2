import React, { ReactElement } from "react";

import "./Input.css";

// export type Inputtype = 'text' | 'email';

interface InputProps {
    options:  null | undefined;
    label: string | null;
    elementType: string;
    elementConfig: React.Component;
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