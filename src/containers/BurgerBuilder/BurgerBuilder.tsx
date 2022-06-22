import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger, { ingredientProps } from '../../components/Burger/Burger';

interface State {
    ingredients: ingredientProps;
}    
class BurgerBuilder extends Component {
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