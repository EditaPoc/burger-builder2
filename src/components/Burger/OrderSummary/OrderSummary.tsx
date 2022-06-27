import React from "react";
import { ingredientProperties } from "../Burger";
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';



interface Props {
    ingredients: ingredientProperties;
    purchaseCancelled: () => void;
    purchaseContinued: () => void;
    price: number;
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default OrderSummary;