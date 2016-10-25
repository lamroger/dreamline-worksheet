import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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
          <MenuItem onTouchTap={this.props.onToggleDrawer}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default LeftDrawer;