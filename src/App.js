import React, { Component, Fragment } from 'react';

import { UserContext } from './UserContext'

import { Toggle } from 'Utilities'
import { Modal } from 'Elements'
import User from './User.js'

import './App.css';

class UserProvider extends Component {
  state = {
    id: '123',
    name: 'Scott',
    email: 'scott@mail.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider
        value = {{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Hi!</h1>
                </Modal>
              </Fragment>
            )}
          </Toggle>

        </div>
      </UserProvider>
    );
  }
}

export default App;
