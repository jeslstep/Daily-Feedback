import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';

// declare object to hold understanding feedback
const emptyUnderstanding = {
    understanding: ''
};

class PageTwo extends Component {

// Local state to store first feedback input
  state = emptyUnderstanding;

// Sets local state 
   handleChange = (event) => {
      this.setState({
         understanding: event.target.value,
      }); 
    console.log(this.state);
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
// Dispatching to addFeedbackReducer
      this.props.dispatch( { type: 'ADD_UDERSTANDING_FEEDBACK', payload: this.state.understanding } )
// Moves user to the next
      this.props.history.push('/3');
   }



  render() {
    return (
        <div>
        <h2>How welling are you understanding the content?</h2>
{ /* user input for feedback question 2 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label="Rate Understanding of 1-10"
          onChange={this.handleChange}
          margin="normal"
        /> 
{ /* moves user to page and dispathes rating 2*/ }
       <Button varient="contained" color="primary" type="submit">NEXT</Button>
     </form>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    };
}

export default withRouter(connect(mapReduxStateToProps)(PageTwo));
