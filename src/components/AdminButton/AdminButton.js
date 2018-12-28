import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class AdminButton extends Component {

  goToNextPageSix = () => {
    this.props.history.push('/6');
  }

  render() {
    return (
      <Button varient="contained" color="secondary"  onClick={this.goToNextPageSix}>Adimin</Button>
    )
  }
}

export default withRouter(AdminButton);