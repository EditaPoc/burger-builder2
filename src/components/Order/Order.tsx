import React from "react";

import "./Order.css";


// export interface ingredientProperties {
//     salad: number;
//     bacon: number;
//     cheese: number;
//     meat: number;
//     [x: string]: number;
//   }
interface orderProps {
    ingredients: {
        salad: number;
        bacon: number;
        cheese: number;
        meat: number;
        [x: string]: number;
    },
    price: number;
    name: {[x: string]: number};
}
const order = (props: orderProps) => {
   const ingredients = [];
   for (let ingredientName in props.ingredients) {
   
        ingredients.push(
            {
                name: ingredientName, 
                amount: props.ingredients[ingredientName]  
            }  
        );
   } 

   const ingredientOutput: JSX.Element[]| JSX.Element = ingredients.map( ig => {
   
    return <span 
        // style={{textTransform: 'capitalize',
        //         display: 'inline-block',
        //         margin: '0 8px',
        //         border: '1px solid #ccc',
        //         padding: '5px'
        //      }} 
             key={ig.name}>{ig.name} ({ig.amount})</span>;
             
   });

    return (
    <div className="Order">
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price: <strong>EUR {Number(props.price).toFixed(2)}</strong></p>
    </div>
    );
}


export default order;