import React, { Component } from 'react';

export default class MainContainer extends Component {
  render() {
    return (
      <div className='container-fluid col-md-12'>
        {this.props.children}
      </div>
    )
  }
}