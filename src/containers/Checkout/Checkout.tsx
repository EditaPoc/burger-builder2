import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";


export interface ingredientProperties {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }
 
  
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1, 
            cheese: 1,
            bacon: 1,
        }
    }

    checkoutCancelledHandler = () => {
       this.props.history.goBack(); 
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                // clicked={function (): void {
                //     throw new Error("Function not implemented.");
                // } } btnType={""} purchaseCancelled={function (): void {
                //     throw new Error("Function not implemented.");
                // } } purchaseContinued={function (): void {
                //     throw new Error("Function not implemented.");
                // } }
                 />
            </div>
        );
    }

}

export default Checkout;