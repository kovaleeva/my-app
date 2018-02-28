
'use strict';

import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';


const records = [];

const Actions = {
  getItems() {
    Dispatcher.dispatch({
      type: ActionTypes.GET_ITEMS,
      records: records,
    });
  },  

  addItem(item) {
    Dispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      item: item,
    });
  },
  
  deleteItem(item) {
    Dispatcher.dispatch({
      type: ActionTypes.DELETE_ITEM,
      item: item,        
    });
  },

  editItem(item) {
    Dispatcher.dispatch({
      type: ActionTypes.EDIT_ITEM,
      item: item,
    });
  },
};

export default Actions;