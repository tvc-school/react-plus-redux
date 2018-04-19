export const users = (state = {}, { type, payload }) => {
  console.log('users');
  console.log('state', state);
  console.log('payload', payload);
  switch (type) {
    case 'updateUser':
      return {...state, ...payload.val}
    case 'addUser':
      return {...state, ...payload.user}
    default:
      return state
  }
}

export default users
