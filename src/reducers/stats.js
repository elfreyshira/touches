import _ from 'lodash';
import { handleActions } from 'redux-actions'

const initialState = {
  attackDamage: 0,
  attackTileQuantity: 0,
  attackTileTime: 0,
  healthRegen: 0,
  healthTotal: 0,
  tilesOnMapQuantity: 0,
  timeLength: 0
};

export default handleActions({

  UPGRADE_STAT (state, {payload}) {
    // const layout = _.chain(payload.tiles)
    
    const statToUpgrade = payload;
    if (_.has(state, statToUpgrade)) {
      const newState = {...state};
      newState[statToUpgrade]++;
      return newState;
    }
    else {
      return state;
    }
  }

  // 'add todo' (state, action) {
  //   return [{
  //     id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
  //     completed: false,
  //     text: action.payload
  //   }, ...state]
  // },

  // 'delete todo' (state, action) {
  //   return state.filter(todo => todo.id !== action.payload )
  // },

  // 'edit todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload.id
  //       ? { ...todo, text: action.payload.text }
  //       : todo
  //   })
  // },

  // 'complete todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload
  //       ? { ...todo, completed: !todo.completed }
  //       : todo
  //   })
  // },

  // 'complete all' (state, action) {
  //   const areAllMarked = state.every(todo => todo.completed)
  //   return state.map(todo => {
  //     return {
  //       ...todo,
  //       completed: !areAllMarked
  //     }
  //   })
  // },

  // 'clear complete' (state, action) {
  //   return state.filter(todo => todo.completed === false)
  // }
}, initialState)
