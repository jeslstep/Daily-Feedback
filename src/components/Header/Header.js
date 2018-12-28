import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {


  render() {
    return (
    <div>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
     </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}



export default connect(mapReduxStateToProps)(Header);
