import React, { Component, ReactComponentElement} from "react";
import { History } from "history";

import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";
import Input from '../../../components/UI/Input/Input';

export interface ingredientProperties {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [x: string]: number;
}

interface ContactProps {
  ingredients: ingredientProperties,
  price: number,
  history?: History;
}

class ContactData extends Component<ContactProps> {
  
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Full Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail'
        },
        value: ''
      },
      deliveryMethod:{
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'delivery method', displayValue: 'Select Delivery Method'},
            {value: 'cheapest', displayValue: 'Cheapest'},
            {value: 'fastest', displayValue: 'Fastest'}
          ]
        },
        value: ''
      }
    },
    loading: false,
    
    };
   
  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // console.log(this.props.ingredients);

    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm){
        formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingerdients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
      
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
 
  inputChangedHandler = (event: { target: { value: string; }; }, inputIdentifier: string) => {
    // console.log(event.target.value);

    const updatedOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({orderForm: updatedOrderForm});
  }

  render() {
    const formElementsArray =  [];
   
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.props.orderForm[key]
      });
    }
    let form = (
        <form onSubmit={this.orderHandler}>
        {formElementsArray.map(formElement => (
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            options={undefined} label={null}/>
        ))}
        <Button btnType="Success" clicked={this.orderHandler} >ORDER</Button>
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
