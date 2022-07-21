import React, { MouseEventHandler } from "react";
import BuildControl from "./BuildContol/BuildControl";
import './BuildControls.css'


export const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
  ];

  interface BuildProps {
    ordered: MouseEventHandler;
    purchasable: boolean;
    ingredientAdded: (type: string) => void;
    ingredientRemoved: (type: string) => void;
    disabled: { [key: string]: any};
    price: number;
  }

const buildControls = (props: BuildProps) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={ () => props.ingredientAdded(ctrl.type)}
                removed={ () => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button className="OrderButton" 
            disabled={!props.purchasable}
            onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;