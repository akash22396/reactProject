import React, { Component, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';

import '../node_modules/jquery/dist/jquery'
import '../node_modules/popper.js/dist/umd/popper'
import '../node_modules/bootstrap/dist/js/bootstrap'

import Header from './component/Header'

import Home from './page/Home';
import Login from './main/Login';
import Signup from './main/Signup';
import Default from './component/Default';
import Post from './page/Post';
import Posts from './page/Posts';


export class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading....</div>}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route exact path="/Posts" component={Posts} />
          <Route path="/Posts/Post/:id" component={Post} />

          <Route path='/Login' component={Login} />
          <Route path='/Sign-up' component={Signup} />
          <Route path='**' component={Default} />
        </Switch>
      </Suspense>

    )
  }
}

export default App

