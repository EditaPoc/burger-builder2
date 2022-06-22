import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger, { ingredientProperties } from '../../components/Burger/Burger';

interface State {
    ingredients: ingredientProperties;
} 

export type Disabled = {
    [key: string]: number | boolean;
  };
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} /> 
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;