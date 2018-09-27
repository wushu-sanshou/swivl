import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';


const UsersTable = () => Loadable({
  loader: () => import('./components/usersTable'),
  loading: () => <div>Loading...</div> 
})

const SingleUser = () => Loadable({
  loader: () => import('./components/singleUser'),
  loading: () => <div>Loading...</div> 
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={ UsersTable() }/>
        <Route exact path="/user/:username" component={SingleUser()}/>
      </div>
    );
  }
}

export default App;
