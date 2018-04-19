export const updateUser = (val) => {
  console.log('updateUser: val', val)
  return (
    {
      type: 'updateUser',
      payload: {
        value: val
      }
    }
  )
}

export const addUser = (userName) => {
  return (
    {
      type: 'addUser',
      payload: {
        userName: userName
      }
    }
  )
}

export const updateNote = (content, id, timestamp = Date.now()) => ({
  type: 'app/updateNote',
  payload: {
    id,
    content,
    timestamp,
  },
});
