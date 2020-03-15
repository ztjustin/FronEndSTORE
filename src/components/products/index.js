import React, { useEffect } from 'react';
import Page from './page';
import getAllNewProducts from '../../redux/actions/getAllNewProducts';
import { connect } from 'react-redux';

const Results = ({ newproducts, getAllNewProducts }) => {

    const onChangePag = (event, page) => {
        getAllNewProducts(page);
    }

    
    useEffect(() => {
    
        getAllNewProducts(1);

    },[getAllNewProducts]);

    return (

        <Page  newproducts = { newproducts.docs } 
        totalPages={newproducts.totalPages} 
        onChange={onChangePag}  />
        
    );
}

const mapStateToProps = (state) => {
    return {
        newproducts : state.newproducts,
    }
}

const mapDispatchToProps = {
    getAllNewProducts,
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)

const component = wrapper(Results);

export default component;