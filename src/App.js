import React, { Component, Fragment } from 'react';
import './App.css';
import Toggle from './ToggleRPC';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            {on && (<h1>Hello</h1>)}
            <button onClick={toggle}>Show / Hide</button>
            <Portal>
              { on && (<h1>Hi I am a Portal!</h1>)}
            </Portal>
          </Fragment>
        )}
      </Toggle>

      </div>
    );
  }
}

export default App;
