export const updateUser = (field, val) => {
  console.log('updateUser: val', val)
  return (
    {
      type: 'updateUser',
      payload: {
        [field]: val
      }
    }
  )
}

export const addUser = (user) => {
  console.log('user', user)
  return (
    {
      type: 'addUser',
      payload: {
        user
      }
    }
  )
}
