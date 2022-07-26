import React from "react";

import "./Input.css";

// export type Inputtype = 'text' | 'email';

interface OptionProps {
    value: string;
    displayValue: string;
}

// interface ValidationProps {
//     required?: boolean;
//     minLenght?: number;
//     maxLenght?: number;
// }
interface InputProps {
    shouldValidate: boolean;
    invalid: boolean;
    label?: string | null;
    elementType: string;
    elementConfig: {
        type?: string;
        placeholder?: string;
        options?: Array<OptionProps>;
    };
    validation: {
        required?: boolean;
        minLenght?: number;
        maxLenght?: number;
    };
    touched: boolean;
    value: string;
    changed: (event: never) => void;
}
const input = (props: InputProps) => {
    let inputElement= null;
    const inputClasses = ["InputElement"];

    if( props.invalid && props.shouldValidate && props.touched) {
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