import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageFive extends Component {

// moves user back to the first page to complete the process again
   handleChange = (event) => {
    this.props.dispatch( {type: 'RESET'} );
    this.props.history.push('/');
   }

  render() {
    return (
        <div>
            <h2>Thank you for your feedback!</h2>
{ /* btn brings user back to page 1, allowing the user to give new feedback */ }
          <button onClick={this.handleChange}>Leave New Feedback</button>
      </div>
    );
  }
}

export default connect()(PageFive);
