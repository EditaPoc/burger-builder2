import { Component } from "react";
import { match, Route } from "react-router-dom";
import { History, Location } from "history";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import "./ContactData/ContactData.css";



// interface State {
//     ingredients: ingredientProperties;
// }
export interface ingredientProperties {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }
  interface CheckoutProps {
    history: History;
    location: Location;
    match: match<{}>;
    path: string;
    // [x: string]: number;
    ingredients: ingredientProperties;
   }
class Checkout extends Component<CheckoutProps>{
    state = {
        ingredients: {
            salad: 0,
            meat: 0, 
            cheese: 0,
            bacon: 0,
        },
        totalPrice: 0
    }
    componentDidMount() {
        
        const query = new URLSearchParams(this.props.location.search);
        // console.log(this.props.location.search);
        const ingredients = {...this.props.ingredients};
        // console.log(this.props.ingredients);
        let params = [];
        let price: (string | number);
        price = '';
        price = 0;
        for ( params of query.entries()) {
            if (params[0] === 'price') {
                price = params[1];
                // console.log(typeof(price));
            } else {
                ingredients[params[0]] = +params[1];
            }
        }

        this.setState({ingredients: ingredients, totalPrice: price})
        // console.log(this.props.ingredients);
    }

    checkoutCancelledHandler = ()  => {
       this.props.history.goBack(); 
    }

    checkoutContinuedHandler = () => {
        this.props.history?.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div className=".ContactData">
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} clicked={function (): void {
                        // throw new Error("Function not implemented.");
                    } } btnType={""}   
                 />
                 
                 <Route path={this.props.match.path + "/contact-data"} render={(Props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...Props} />)} />
                 
            </div>
        );
    }

}

export default Checkout;

