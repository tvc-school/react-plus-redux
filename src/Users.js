import React from 'react'
import { connect } from 'react-redux'

const Users = ({ users }) => {
  const renderUsers = users.map((u, index) => {
    return (
      <li key={index}>{u.userName}, {u.userEmail}</li>
    )
  })
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {renderUsers}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
export default connect(mapStateToProps)(Users)
