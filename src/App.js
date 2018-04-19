import React from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import * as actionCreators from './store/actions'

const App = ({ updateUser }) => {
  console.log('updateUser', updateUser);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Plus Redux</h1>
      </header>
      <input type='text' onChange={(event) => updateUser(event.target.value)} />
      {              /*  onChange={(event) => updateNote(event.target.value, note.id)} */}
      <button>Add User</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log('theState', state)
  return {
    theState: state
  }
}
export default connect(mapStateToProps, actionCreators)(App)
