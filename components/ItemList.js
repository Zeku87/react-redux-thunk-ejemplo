import React, { Component } from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../redux/actions/items';

import {ListGroup, ListGroupItem} from 'react-bootstrap';

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
            <div className="container">
                <ListGroup>
                    {this.props.items.map( item => 
                        <ListGroupItem key={item.id}>
                            <b>ID:</b> {item.id} - <b>Info:</b> {item.label}
                        </ListGroupItem>
                    )}
                </ListGroup>
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