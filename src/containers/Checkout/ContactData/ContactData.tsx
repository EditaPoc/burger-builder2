import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../../components/UI/Button/Button";
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render () {
        return (
            <div>
                <h4>Enter your Contact Data</h4>
                <form action="">
                    <input className="Input" type="text" name="name" placeholder="Your Name"></input>
                    <input className="Input" type="email" name="email" placeholder="Your Mail"></input>
                    <input className="Input" type="text" name="street" placeholder="Street"></input>
                    <input className="Input" type="text" name="postal" placeholder="Postal Code"></input>  
                    <Link className="LinkButton" to={'/contact-data'}>ORDER</Link>
                </form>
            </div>
        )
    }
}

export default ContactData;