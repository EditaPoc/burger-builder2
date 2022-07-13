import React, { Component} from "react";
import { History } from "history";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger, { ingredientProperties } from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import axios from "../../axios-orders";

interface State {
  ingredients: ingredientProperties;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
  loading: boolean;
  error: boolean;
}

interface Props {
  history: History;
}

export type Disabled = {
  [key: string]: number | boolean;
};

const INGREDIENT_PRICES: ingredientProperties = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component<Props> {
  state: State = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 3,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
  axios
    .get("https://my-burger-builder-9fb9c-default-rtdb.europe-west1.firebasedatabase.app/Ingredients.json")
    .then((response) => {
      this.setState({ ingredients: response.data  });
    })
    .catch((error) => {
      this.setState({ error: true });
    });
  }

  updatePurchaseState(ingredients: {
    [x: string]: any;
    salad?: number;
    bacon?: number;
    cheese?: number;
    meat?: number;
  }) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  addIngredientHandler = (type: string): void => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type: string): void => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount: number = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert("Continue");
    this.props.history?.push({
      pathname: '/checkout',
      search: ''
    });
    // this.setState({ loading: true });
    // const order = {
    //   ingerdients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Jonas Antanaitis",
    //     address: {
    //       street: "Kretingos 11-10",
    //       zipCode: "98638",
    //       country: "Lithuania",
    //     },
    //     email: "jonas@jonas.com",
    //   },
    //   deliveryMethod: "fastest",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     this.setState({ loading: false, purchasing: false });
    //   })
    //   .catch((error) => {
    //     this.setState({ loading: false, purchasing: false });
    //   });
    
    
    // const queryParams: string[] = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    // }
    // const queryString = queryParams.join('&');
    // this.props.history?.push({
    //   pathname: '/checkout',
    //   search: '?' + queryString });

    
  }

  render() {
    let disabledInfo: Disabled = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = //this.state.error ? (
      (
        //  <p>Ingredients can't be loaded!</p>
        // ) : (
        <Spinner />
      );
    // );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
