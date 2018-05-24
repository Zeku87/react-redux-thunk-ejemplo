import React from 'react';
import {render} from 'react-dom';
import {PageHeader} from 'react-bootstrap'
import { Provider } from 'react-redux'
import ItemList from './components/ItemList';
import configureStore from './redux/store/configureStore'


const store = configureStore()
const github = "https://github.com/Zeku87/react-redux-thunk-ejemplo";


render(

    <div className="container">
        <PageHeader>
            React-redux-thunk example <br/>
            <small>Code hosted at <a href={github}>Github</a></small> 
        </PageHeader>
        <Provider store={store}>
            <ItemList/>
        </Provider>
    </div>,
    document.getElementById("root")
);