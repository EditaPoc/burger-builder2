import React from "react";
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerINgredient';



export interface ingredientProps {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }

  interface Props {
    ingredient: ingredientProps;
  }
const burger = (props: Props) => {
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="chees" />
            <BurgerIngredient type="meet" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;