import React, { Component } from 'react';
import './App.css';
import UsersTable from './components/usersTable';
import { Route } from 'react-router-dom';
import SingleUser from './components/singleUser';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ UsersTable }/>
        <Route exact path="/user/:username" component={SingleUser}/>
      </div>
    );
  }
}

export default App;
