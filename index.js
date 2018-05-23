import React, { Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import ItemList from './components/ItemList';
import configureStore from './store/configureStore'

const store = configureStore()


render(
    <Provider store={store}><ItemList/></Provider>, 
    document.getElementById("container")
);