import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import PageFive from '../PageFive/PageFive'
import AdminPage from '../AdminPage/AdminPage';
import { HashRouter as Router, Route} from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {

// get feedback upon page load
componentDidMount() {
    this.getFeedback();
  }

// GET request for feedback from the server
getFeedback = () => {
    axios.get('/feedback')
      .then( (response) => {
        console.log(response.data);      
// dispatching to getFeedbackReducer
        this.props.dispatch( {type: 'SET_FEEDBACK', payload: response.data} );
      })
      .catch( (error) => {
        alert('error in making get request', error);
      })
  }


  render() {
    return (
      <div className="App">
      <Header/>
      <div>
        <Router>
          <Route exact path="/" component={PageOne} />
        </Router>
        <Router>
          <Route path="/2" component={PageTwo} />
        </Router>
        <Router>
          <Route path="/3" component={PageThree} />
        </Router>
        <Router>
          <Route path="/4" component={PageFour} />
        </Router>
        <Router>
          <Route path="/5" component={PageFive} />
        </Router>
        <Router>
          <Route path="/6" component={AdminPage} />
        </Router> 
        </div>
     </div>
    );
  }
}const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}



export default connect(mapReduxStateToProps)(App);
