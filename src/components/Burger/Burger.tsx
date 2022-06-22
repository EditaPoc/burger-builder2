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
    //let ingredients: JSX.Element;

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="bacon" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;