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
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    }
    render () {
        return (
            <Aux>
                <Burger  /> 
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;