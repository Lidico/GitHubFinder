import React from 'react';
import Navbar from './components/layouts/Navbar'
import Alert from './components/layouts/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import User from './components/users/User'
import About from './components/pages/About'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App =() => {

    return (
      <GithubState>
          <AlertState>
          <Router>
            <div>
                <Navbar title='GitHub Finder' icon='fa fa-github' titleSmall='GHF'/>
                <div className='container'>
                  <Alert />
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/user/:login' component={User}/>
                    <Route component={NotFound}/>
                  </Switch>
                </div>
            </div>
          </Router>
          </AlertState>
      </GithubState>
    )
}

export default App
