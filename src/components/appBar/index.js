import React, { useEffect } from 'react';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import getAllProducts from '../../redux/actions/getAllProducts';
import getAllCategories from '../../redux/actions/getAllCategories';
import { connect } from 'react-redux';

const  AppBar = (props) => {

    const { suggestions , categories , container ,  findSuggestions, getAllProducts, getAllCategories } = props; 

    const [ text, setText ] = React.useState('');

    useEffect(()=> {
        getAllCategories()
    },[getAllCategories]);

    const onChangeSelection = (text) => {

        setText(text)

        getAllProducts();

    }

    const onChangeText = (text) => {
        setText(text)

        findSuggestions(text);


    }

    return (

        <Page 
            container={ container }
            text={text}
            suggestions={ suggestions }
            onChangeText={ onChangeText } // function for the AutoComplete
            onChangeSelection={ onChangeSelection } //function for AutoComplete
            categories={ categories }

        
        />
        
    );
}

const mapStateToProps = (state) => {
    return {
        suggestions : state.suggestions,
        categories: state.categories
    }
}

const mapDispatchToProps = {
    findSuggestions,
    getAllProducts,
    getAllCategories
};

const wrapper = connect(mapStateToProps,mapDispatchToProps)

const component = wrapper(AppBar);

export default component;
