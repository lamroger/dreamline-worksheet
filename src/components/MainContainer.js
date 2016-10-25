import React, { Component } from 'react';

export default class MainContainer extends Component {
  render() {
    return (
      <div className='container-fluid col-md-12 text-center'>
        {this.props.children}
      </div>
    )
  }
}