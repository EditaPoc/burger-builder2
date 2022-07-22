import React, { Component, Key } from "react";
import { History } from "history";

import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";
import Input from "../../../components/UI/Input/Input";

export interface ingredientProperties {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [x: string]: number;
}

interface OptionProps {
  value: string;
  displayValue: string;
}
interface ContactProps {
  ingredients: ingredientProperties;
  price: number;
  history?: History;

  // orderForm: {
  //   fullname: {
  //     elementType: string;
  //     value: string;
  //     elementConfig: {
  //       type: string;
  //       placeholder: string;
  //       options?: [] | undefined;
  //     }
  //   };
  //   street: {
  //     elementType: string;
  //     value: string;
  //     elementConfig: {
  //       type: string;
  //       placeholder: string;
  //       options?: [] | undefined;
  //     }
  //   };
  //   zipCode: {
  //     elementType: string;
  //     value: string;
  //     elementConfig: {
  //       type: string;
  //       placeholder: string;
  //       options?: [] | undefined;
  //     }
  //   };
  //   country: {
  //     elementType: string;
  //     value: string;
  //     elementConfig: {
  //       type: string;
  //       placeholder: string;
  //       options?: [] | undefined;
  //     }
  //   };
  //   email: {
  //     elementType: string;
  //     value: string;
  //     elementConfig: {
  //       type: string;
  //       placeholder: string;
  //       options?: [] | undefined;
  //     }
  //   };
  //   deliveryMethod: {
  //     elementType: string;
  //     value: string;
  //     elementConfig: {
  //       options?: Array<OptionProps>;
  //   }
  // };
  // }
}

interface State {
  loading: boolean;
  orderForm: {
    fullname: {
      elementType: string;
      elementConfig: {
        type: string;
        placeholder: string;
      };
      value: string;
      validation:{
        required:boolean
      };
      valid: boolean;
    };
    street: {
      elementType: string;
      value: string;
      elementConfig: {
        type: string;
        placeholder: string;
      };
      validation: {
        required:boolean
      };
      valid: boolean;
    };
    zipCode: {
      elementType: string;
      value: string;
      elementConfig: {
        type: string;
        placeholder: string;
      };
      validation: {
        required: boolean
      };
      valid: boolean;
      minLength: number,
      maxLength: number
    };
    country: {
      elementType: string;
      value: string;
      elementConfig: {
        type: string;
        placeholder: string;
      };
      validation:{
        required:boolean
      };
      valid: boolean;
    };
    email: {
      elementType: string;
      value: string;
      elementConfig: {
        type: string;
        placeholder: string;
      };
      validation:{
        required:boolean
      };
      valid: boolean;
    };
    deliveryMethod: {
      elementType: string;
      value: string;
      elementConfig: {
        options?: Array<OptionProps>;
      };
    };
  };
};
  

class ContactData extends Component<ContactProps> {
  state: State = {
    orderForm: {
      fullname: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Full Name",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation: {
          required: true,
        },
          minLength: 5,
          maxLength: 5,
          valid: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Mail",
        },
        value: "",
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "delivery method",
              displayValue: "Select Delivery Method",
            },
            { value: "cheapest", displayValue: "Cheapest" },
            { value: "fastest", displayValue: "Fastest" },
          ],
        },
        value: "",
      },
    },
    loading: false,
  };

  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] =
        this.state.orderForm[
          formElementIdentifier as keyof typeof this.state.orderForm
        ].value;
    }
    const order = {
      ingerdients: this.props.ingredients,
      price: this.props.price,
      orderData: formData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history?.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  checkValidity(value: string, rules: {
    maxLength: number;
    minLength: number; required: boolean; 
}) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (
    event: { target: { value: string } },
    inputIdentifier: string
  ) => {
    // console.log(event.target.value);

    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    //giliau paima nuo elementType values
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier as keyof typeof this.state.orderForm],
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation); 
    console.log(updatedFormElement);
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key as keyof typeof this.state.orderForm],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
            label={null} valid={false}          />
        ))}
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
