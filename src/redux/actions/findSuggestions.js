import axios from 'axios';

export const type = 'findSuggestions';

const findSuggestions = text => {
    return (dispatch, getState) => {

            // const { products } = getState();

            return axios.get("http://localhost:3000/product", { params: {  filter: text, limit: 10, fields: 'name' } })
            .then(response => {
                dispatch({
                    type,
                    suggestions: response.data
                })
            })
    };
}

export default findSuggestions;