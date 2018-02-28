import {Container} from 'flux/utils';
import React from 'react';
import Store from './../actions/Store';
import Actions from './../actions/Actions';
import AppView from './../js/Components';
import Dispatcher from './../actions/Dispatcher';

class CounterContainer extends React.Component {
    static getStores() {
        return [Store];
    }

    static calculateState() {
        return {
            records: Store.getState(),
            
            onGetItems: Actions.getItems,
            onAdd: Actions.addItem,
            onDelete: Actions.deleteItem,
        };
    }
    
    render() {
        return <AppView records={this.state.records} onGetItems={this.state.onGetItems}  onAdd={this.state.onAdd} onDelete={this.state.onDelete} onEdit={this.state.onEdit}/>;
    }
}

const container = Container.create(CounterContainer);

export default container;