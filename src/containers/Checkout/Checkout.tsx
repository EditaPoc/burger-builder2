import { Component } from "react";
import { Link, Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import "./ContactData/ContactData.css";
import { History, Location } from "history";



 
  interface NewProps {
    history?: History;
   }
class Checkout extends Component<NewProps>{
    state = {
        ingredients: {
            salad: 1,
            meat: 1, 
            cheese: 1,
            bacon: 1,
        }
    }

    // componentDidMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {[]};
    //     for (let param of query.entries() {
    //         ingredients[param[0]] = +param[1];
    //     }

    //     this.setState({ingredients: ingredients})
    // }

    checkoutCancelledHandler = ()  => {
       this.props.history?.goBack(); 
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
                        throw new Error("Function not implemented.");
                    } } btnType={""}   
                 />
                 
                 <Route path="/contact-data" component={ContactData} />
                
                 {/* <Link to={'/contact-data'} /*element={ ContactData }*/ /> */}
            </div>
        );
    }

}

export default Checkout;