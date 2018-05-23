import React, { Component } from 'react';
import 'whatwg-fetch';

class ItemList extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoading:true,
            hasErrored:false,
        };
    }

    componentDidMount (){
        this.setState({isLoading: true})
        const url = 'http://5826ed963900d612000138bd.mockapi.io/items';
        fetch(url)
            .then( response => response.json() )
            .then( items => this.setState({
                items:items,
                isLoading:false
            })
            .catch(
                error => this.setState({
                    isLoading:false, 
                    hasErrored:true
                })
            )
        )}

    render() {
            if( this.state.hasErrored)
                return <div>Error: es posible que no haya escrito bien la url o no tenga persmisos</div>;
            if( this.state.isLoading)
                return <div>Cargando...</div>;
        
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