import React from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actions'

import logo from './logo.svg';
import './App.css';
import Users from './Users'

const App = ({ updateUser, addUser, userName, userEmail }) => {
  const user = { userName, userEmail }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Plus Redux</h1>
      </header>
      <input type='text' name='userName' onChange={(e) => updateUser(e.target.name, e.target.value)} />
      <input type='text' name='userEmail' onChange={(e) => updateUser(e.target.name, e.target.value)} />
      <button onClick={() => addUser(user)}>Add User</button>
      <Users />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.userName,
    userEmail: state.user.userEmail
  }
}
export default connect(mapStateToProps, actionCreators)(App)
