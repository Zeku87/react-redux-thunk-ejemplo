import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'whatwg-fetch';

class ItemList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount (){
        const url = 'http://5826ed963900d612000138bd.mockapi.io/items';
        fetch(url)
            .then( response => response )
            .then( response => response.json() )
            .then( items => this.setState({items})
        )}

    render() {
            return (
                <div>
                    <ul>
                        {this.state.items.map( item => 
                            <li key={item.id}>
                                {item.label}
                            </li>
                        )}
                    </ul>
                </div>
            );
        }
}

ReactDOM.render(<ItemList/>, document.getElementById("container"));