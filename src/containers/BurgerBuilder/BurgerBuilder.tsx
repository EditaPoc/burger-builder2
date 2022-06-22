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
    render () {
        return (
            <Aux>
                <Burger ingredients={undefined} /> 
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;