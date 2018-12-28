import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AdminButton from '../AdminButton/AdminButton';
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';

// declare object to hold feeling feedback
const emptyFeeling= {
    feeling: ''
};


class PageOne extends Component {

// Local state to store first feedback input
  state = emptyFeeling;

// Sets local state 
   handleChange = (event) => {
      this.setState({
         feeling: event.target.value,
      });
   }

   handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
// Dispatching to addFeedbackReducer
      this.props.dispatch( { type: 'ADD_FEELING_FEEDBACK', payload: this.state.feeling } )
// Moves user to the next
      this.props.history.push('/2');
   }

  render() {
    return (
        <div>
             <br/>
       <AdminButton /> 
        <h2>How are you feeling today?</h2>
{ /* user input for feedback question 1 */ }
    <form onSubmit={this.handleSubmit}>
        <TextField
          id="standard-name"
          label="Rate Feeling of 1-10"
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

export default withRouter(connect(mapReduxStateToProps)(PageOne));
