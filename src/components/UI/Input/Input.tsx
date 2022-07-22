import React from "react";

import "./Input.css";

// export type Inputtype = 'text' | 'email';

interface OptionProps {
    value: string;
    displayValue: string;
}
interface InputProps {
    shouldValidate?: boolean | undefined;
    invalid?: boolean;
    label: string | null;
    elementType: string;
    elementConfig: {
        type?: string;
        placeholder?: string;
        options?: Array<OptionProps>
    };
    valid?: boolean;
    value: string;
    changed: (event: any) => void;
    className?: React.HTMLAttributes<Text> | string | undefined;
}
const input = (props: InputProps) => {
    let inputElement= null;
    const inputClasses = ["InputElement"];

    if( props.invalid && props.shouldValidate) {
        inputClasses.push("Invalid");
    }
    // console.log(inputElement);
    switch (props.elementType) {
        case ( 'input'):
            inputElement = <input 
                className={inputClasses.join(' ')}
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
            <select 
                className={inputClasses.join(' ')}  
                value={props.value}
                onChange={props.changed}> 
                {props.elementConfig.options?.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
                ); 
            break;
        default:
            inputElement = <input 
                className={inputClasses.join(' ')}  
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