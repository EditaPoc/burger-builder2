import React, { HTMLInputTypeAttribute } from "react";

import "./Input.css";

export type Inputtype = 'text' | 'email';

interface InputProps {
    // inputtype: HTMLInputTypeAttribute;
    label: string;
    // name: string;
    // placeholder: string;
    // type?: Inputtype;
    elementType: string;
    elementConfig: [{}];
    value: string;
}

const input = (props: InputProps) => {
    let inputElement= null;
    console.log(inputElement);
    switch (props.elementType) {
        case ( 'input'):
            inputElement = <input 
                className="InputElement" 
                {...props.elementConfig} 
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className="InputElement" 
                {...props.elementConfig} 
                value={props.value} />; 
            break;
        default:
            inputElement = <input 
                className="InputElement" 
                {...props.elementConfig} 
                value={props.value} />;      
    }

    return (
        <div className="Input">
        <label className="LabelInput">{props.label}</label>
        {inputElement}
    </div>
    );
   
}

export default input;