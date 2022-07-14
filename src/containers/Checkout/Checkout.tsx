import { Component } from "react";
import { match, Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import "./ContactData/ContactData.css";
import { History, Location } from "history";



interface State {
    ingredients: ingredientProperties;
}
export interface ingredientProperties {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }
  interface Props {
    history: History;
    location: Location;
    match: match<{}>;
    path: string;
    // [index: string]: number;
    ingredients: ingredientProperties;
   }
class Checkout extends Component<Props>{
    state: State = {
        ingredients: {
            salad: 1,
            meat: 1, 
            cheese: 1,
            bacon: 1,
        }
    }
    componentDidMount() {
        
        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props.location.search);
        const ingredients = {...this.props.ingredients};
        console.log(this.props.ingredients);
        let param: string[] = [];
        for ( param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients: ingredients})
        console.log(this.props.ingredients);
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
                 
                 <Route path={this.props.match.path + "/contact-data"} component={ContactData} render={() => (<ContactData ingredients={this.state.ingredients} />)} />
                 
            </div>
        );
    }

}

export default Checkout;

