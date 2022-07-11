import React, { MouseEventHandler } from "react";
import Burger, { ingredientProperties } from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";

interface Props {
    ingredients: ingredientProperties;
    clicked: MouseEventHandler;
    btnType: string;
    purchaseCancelled: () => void;
    purchaseContinued: () => void;
    // children: JSX.Element | JSX.Element [] | string;
  }

const checkoutSummary = (props: Props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', transform: 'translateY(0)', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}  />
            </div>
            <Button 
                btnType="Danger"
                clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.purchaseContinued}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;