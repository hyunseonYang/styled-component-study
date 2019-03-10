import React, { Component, Fragment } from 'react';
// import GlobalStyle from 'assets/GlobalStyle'
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <GlobalStyle /> */}
        <Button />
        <Button active />
      </Fragment>
    );
  }
}

export default App;
