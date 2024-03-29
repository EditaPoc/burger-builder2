import React, {Component} from "react";
import { ingredientProperties } from "../Burger";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

interface Props {
    ingredients: ingredientProperties;
    purchaseCancelled: () => void;
    purchaseContinued: () => void;
    price: number;
}

class OrderSummary extends Component<Props> {
    componentDidUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
        return  (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
    });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A deliciuos burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled} disabled={undefined}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued} disabled={undefined}>CONTINUE</Button>
            </Aux>
        ); 
    
    }   
}

export default OrderSummary;