const defaultState = [];


function reducer(state = defaultState, { type, suggestions }){
    switch(type){

        case 'findSuggestions':
            return suggestions.docs
        default:
            return state;
    }
}

export default reducer;