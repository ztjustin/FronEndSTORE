import React, { useEffect } from 'react';
import Page from './page';
import getAllProducts from '../../redux/actions/getAllProducts';
import { connect } from 'react-redux';

const Results = ({products, getAllProducts}) => {

    
  useEffect(() => {
   
    getAllProducts();

  },[getAllProducts]);

    return (

        <Page />
        
    );
}

const mapStateToProps = (state) => {
    return {
        products : state.products,
    }
}

const mapDispatchToProps = {
    getAllProducts,
};

const wrapper = connect(mapStateToProps, mapDispatchToProps)

const component = wrapper(Results);

export default component;