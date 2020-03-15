import axios from 'axios';

export const type = 'getAllNewProducts';

const days = 31;

const getAllNewProducts = page => {
    return (dispatch, getState) => {

            // const { products } = getState();

            return axios.get("http://localhost:3000/product/AllnewProducts", { params: {  days: days, page : page } })
            .then(response => {
                dispatch({
                    type,
                    newproducts: response.data
                })
            })
    };
}

export default getAllNewProducts;