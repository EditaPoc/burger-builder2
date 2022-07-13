import React, { Component } from "react";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }


    }
}

export default ContactData;