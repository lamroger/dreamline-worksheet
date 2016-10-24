import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftDrawer extends React.Component {
  render() {
    return (
      <div>
        <Drawer open={this.props.open} onToggleDrawer={this.props.onToggleDrawer}>
          <MenuItem onTouchTap={this.props.onToggleDrawer}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.props.onToggleDrawer}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default LeftDrawer;