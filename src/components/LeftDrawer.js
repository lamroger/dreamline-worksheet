import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class LeftDrawer extends React.Component {
  render() {
    return (
      <div>
        <Drawer 
          open={this.props.open} 
          onRequestChange={this.props.onToggleDrawer}
          docked={false}
          width={200}
        >
          <MenuItem 
            onTouchTap={this.props.onToggleDrawer}
            containerElement={<Link to="/" />}
            primaryText='Home'
          />
          <MenuItem 
            onTouchTap={this.props.onToggleDrawer}
            containerElement={<Link to="/about" />}
            primaryText='About'
          />
        </Drawer>
      </div>
    );
  }
}
export default LeftDrawer;