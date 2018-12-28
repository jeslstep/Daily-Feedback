import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

// declare object to hold comments feedback
const emptyCommments = {
  comments: ''
};

class PageTwo extends Component {

// Local state to store first feedback input
  state = emptyCommments;

// Sets local state 
   handleChange = (event) => {
      this.setState({
         comments: event.target.value,
      });
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
// Dispatching to addFeedbackReducer
      this.props.dispatch( { type: 'ADD_COMMENTS_FEEDBACK', payload: this.state.comments } )
// Uses the addFeedback post request function in App.js to send feedback to server
      this.addFeedback();
// Moves user to the next
      this.props.history.push('/5');
   }

  // POST request addFeedback sends feedback to server, called on PageFour
  addFeedback = (event) => {
      let feedback = [
        this.props.reduxState.addFeedbackReducer.feeling,
        this.props.reduxState.addFeedbackReducer.understanding, 
        this.props.reduxState.addFeedbackReducer.support, 
        this.props.reduxState.addFeedbackReducer.comments
      ]
     axios({
       method: 'POST',
       url: '/feedback',
       data: feedback
     }).then(response => {
       this.getFeedback();
// may need to clear redux state here
     }).catch(error => {
       alert('Error', error);
     })
   }

  render() {
    return (
        <div>
        <h2>Any comments you wish to leave?</h2>
{ /* user input for feedback question 2 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label= "Comments"
          onChange={this.handleChange}
          margin="normal"
        /> 
{ /* moves user to the next page, dispathes comments feedback, posts to server*/ }
       <Button varient="contained" color="primary" type="submit">Submit Feedback</Button>
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
