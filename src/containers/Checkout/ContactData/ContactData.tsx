import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";

export interface ingredientProperties {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }

  interface Props {
    ingredients: ingredientProperties;
  }
class ContactData extends Component<Props> {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render () {
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name"></input>
                    <input className="Input" type="email" name="email" placeholder="Your Mail"></input>
                    <input className="Input" type="text" name="street" placeholder="Street"></input>
                    <input className="Input" type="text" name="postal" placeholder="Postal Code"></input>  
                    <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;