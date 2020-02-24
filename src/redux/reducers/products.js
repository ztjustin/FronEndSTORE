const defaultState = 23;


function reducer(state = defaultState, { type, products }){
    switch(type){
        case 'getAllProducts':
            return {
                ...state,
                products: products
            }
        default:
            return state;
    }
}

export default reducer;