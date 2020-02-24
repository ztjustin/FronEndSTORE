import React from 'react';
import Page from './page';
import { connect } from 'react-redux';

const  AppBar = (props) => {

    const { suggestions } = props; 

    const [ text, setText ] = React.useState('');

    const onChangeSelection = (text) => {
        setText(text)
    }

    const onChangeText = (text) => {
        setText(text)
    }

    return (

        <Page 
            text={text}
            suggestions={ suggestions }
            onChangeText={ onChangeText }
            onChangeSelection={ onChangeSelection }
        
        />
        
    );
}

const mapStateToProps = (state) => {
    return {
        suggestions : state.suggestions,
    }
}

const wrapper = connect(mapStateToProps)

const component = wrapper(AppBar);

export default component;
