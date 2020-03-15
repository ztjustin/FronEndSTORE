const defaultState = [];


function reducer(state = defaultState, { type, products }){
    switch(type){
        
        case 'getAllProducts':
            return products
        default:
            return state;
    }
}

export default reducer;