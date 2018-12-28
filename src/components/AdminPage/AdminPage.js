import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class AdminPage extends Component {

// deleteFeeback deletes feedback by feedback id
 deleteFeedback = (Id) => {
   axios({
     method: 'DELETE',
     url: `feedback/delete/${Id}`
   }).then(() => {
     console.log('feedbackId', Id);
     
   }).catch(error => {
     alert('Like delete error:', error);
   });
 }

  render() {
    return (
      <div>
          <h1>Admin Page</h1>
   {/* looping through the feedback from redux */}
        {this.props.reduxState.getFeedbackReducer.map( feedback => (
            <div id="card">
{ /* displaying in table */ }
            <table>
                <thead>
                    <tr>
                    <th>Id</th><th>Feeling</th><th>Understanding</th>
                    <th>Support</th><th>Comments</th><th>Flagged</th>
                    <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key ={feedback.id}>
                    <td>{feedback.id}</td><td>{feedback.feeling}</td><td>{feedback.understanding}</td>
                    <td>{feedback.support}</td><td>{feedback.comments}</td><td>{feedback.flagged}</td>
                    <td>{feedback.date}</td>
{ /* button to delete corresponding table row*/ }
                    <td><button onClick={(event) => this.deleteFeedback(feedback.id)}>Delete</button></td>
                    </tr>
                </tbody>
            </table>        
            </div>
            ))}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return {reduxState};
}

export default connect(mapReduxStateToProps)(AdminPage);
