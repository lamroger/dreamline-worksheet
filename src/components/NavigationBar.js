import React from 'react';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer'

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className='nav-bar'>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
        />
        <LeftDrawer open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)} />
      </div>
    )
  }
}