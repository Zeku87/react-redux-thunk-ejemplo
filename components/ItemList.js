import React, { Component } from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../actions/items'

class ItemList extends Component {
    
    componentDidMount (){
           this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if( this.props.hasErrored)
            return <div>Error: es posible que no haya escrito bien la url o no tenga persmisos</div>;
        if( this.props.isLoading)
            return <div>Cargando...</div>;
        
        return (
            <div>
                <ul>
                    {this.props.items.map( item => 
                        <li key={item.id}>
                            {item.label}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);