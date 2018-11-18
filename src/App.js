import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring'

import UserProvider from './UserProvider'

import { Toggle } from 'Utilities'
import { Modal, Card } from 'Elements'
import User from './User.js'

import './App.css';
import { hidden } from 'ansi-colors';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />

          <section>
            <Toggle>
              {({ on, toggle }) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition 
                    items={on}
                    from={{ opacity: 0, bg: '#82d8d8', height: '0px' }}
                    enter={{ opacity: 1, bg: '#524763', height: '200px' }}
                    leave={{ opacity: 0, bg: '#82d8d8', height: '0px' }}>
                    {on => on && (styles => <Header styles={styles} />)}
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>

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

const Header = ({styles}) => (
  <Card style={{
    opacity: styles.opacity,
    background: styles.bg,
    overflow: 'hidden',
    height: styles.height
  }}>
    <h1>Show me!</h1>
    <h3>{styles.bg}</h3>
  </Card>
)

export default App;
