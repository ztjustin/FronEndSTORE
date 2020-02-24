const defaultState = [{
    id: 1,
    title:"hola"
}];


function reducer(state = defaultState, { type, payload }){
    switch(type){
        case 'findSuggestions': {
            return [{
                id: 1,
                title: "Ejemplo"
            }]
        }
        default:
            return state;
    }
}

export default reducer;