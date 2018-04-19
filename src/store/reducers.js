import { combineReducers } from 'redux'

export const user = (state = {}, { type, payload }) => {
  //console.log('users');

  switch (type) {
    case 'updateUser':
      return {...state, ...payload}
    default:
      return state
  }
}

export const users = (state = [], { type, payload }) => {
  console.log('users: state', state);
  console.log('users: payload', payload);
  switch (type) {
    case 'addUser':
      return [...state, payload.user]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user,

  users,
})

export default rootReducer
