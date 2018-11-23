import React, { Component, Fragment } from 'react';

import UserProvider from './UserProvider'

import { Toggle } from 'Utilities'
import { Modal, Card } from 'Elements'
import Drag from './Drag'

import './App.css';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <Drag />
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
