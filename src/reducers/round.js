import _ from 'lodash';
import { handleActions } from 'redux-actions'

const initialState = {
  isActive: false,
  tiles: [],
  healthTotal: 0,
  healthRegen: 0,
  layout: {},
  startTime: 0,
  endTime: 0,
  tilesOnMapQuantity: 0
};

export default handleActions({

  SETUP_ROUND (state, {payload}) {
    // const layout = _.chain(payload.tiles)
    return {
      ...state,
      tiles: payload.tiles
    };
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
