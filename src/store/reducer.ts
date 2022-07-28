import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
    totalPrice: 3
}

const reducer = (state = initialState, action: {
    ingredientName: {[x: string]: number}; type: unknown; 
}) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName[0]]: state.ingredients[action.ingredientName as unknown as keyof typeof state.ingredients] + 1
                }
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName[0]]: state.ingredients[action.ingredientName as unknown as keyof typeof state.ingredients] - 1
                }
            };
        default:
            return state;        
    }
};

export default reducer;