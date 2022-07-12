import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import Burger, { ingredientProperties } from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";

interface Props {
    ingredients: ingredientProperties;
    clicked: MouseEventHandler;
    btnType: string;
    checkoutCancelled: () => void;
    checkoutContinued: () => void;
    // children: JSX.Element | JSX.Element [] | string;
  }

const checkoutSummary = (props: Props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', transform: 'translateY(0)', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}  />
            </div>
            <Link to={{pathname: '/'}} className="BackLink">CANCEL</Link>
            <Link to={{pathname: '/contact-data'}} className="LinkButton">CONTINUE</Link>
            {/* <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button> */}
        </div>
    )
}

export default checkoutSummary;