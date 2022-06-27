import React from "react";
import { ingredientProperties } from "../Burger";
import Aux from '../../../hoc/Auxiliary';
interface Props {
    ingredients: ingredientProperties;
    //price: number;
}

const OrderSummary = (props: Props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return  (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
    });
   
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A deliciuos burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};

export default OrderSummary;