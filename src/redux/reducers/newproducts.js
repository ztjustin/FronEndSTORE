const defaultState = [];


function reducer(state = defaultState, { type, newproducts }){
    
    switch(type){
        
        case 'getAllNewProducts':
            return newproducts
        default:
            return state;
    }
}

export default reducer;