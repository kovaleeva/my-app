import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

class Store extends ReduceStore {
    constructor() {
      super(Dispatcher);
    }
  
    getInitialState() {
      return [];
    }
  
    reduce(state, action) {
      switch (action.type) {
        case ActionTypes.GET_ITEMS:
          return [...action.records];
        case ActionTypes.ADD_ITEM:
          state.push(action.item);
          return [...state];
        case ActionTypes.DELETE_ITEM:
          state.splice(state.indexOf(action.item), 1);
          return [...state];
        case ActionTypes.EDIT_ITEM:
          // const item = action.item;
          // return state.map(x => x.id === item.id ? item : x);
          return [...state];
        default:
          return state;
      }
    }
  }
  
  export default new Store();