import React, { Component } from "react";
import { History } from "history";

import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";

export interface ingredientProperties {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [index: string]: number;
}

interface Props {
  ingredients: ingredientProperties,
  price: number,
  history?: History;
}
class ContactData extends Component<Props> {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingerdients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Jonas Antanaitis",
        address: {
          street: "Kretingos 11-10",
          zipCode: "98638",
          country: "Lithuania",
        },
        email: "jonas@jonas.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history?.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
        <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your Name"
        ></input>
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your Mail"
        ></input>
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
        ></input>
        <input
          className="Input"
          type="text"
          name="postal"
          placeholder="Postal Code"
        ></input>
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
        if (this.state.loading) {
            form = <Spinner />;
        }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
       {form}
      </div>
    );
  }
}

export default ContactData;
