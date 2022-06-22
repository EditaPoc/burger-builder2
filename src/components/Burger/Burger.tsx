import React from "react";
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



export interface ingredientProperties {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }

  interface Props {
    ingredients: ingredientProperties;
  }

const burger = (props: Props) => {
    let transformedIngredients: JSX.Element[]| JSX.Element = Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        });
      })
      .reduce((arr, el) => {
        return arr.concat(el)
      }, []);
    if(transformedIngredients.length === 0){
      transformedIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;