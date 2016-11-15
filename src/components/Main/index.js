import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationBar from '../NavigationBar';

export default class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='main-container'> 
          <NavigationBar
            title='Dreamline Worksheet'
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}