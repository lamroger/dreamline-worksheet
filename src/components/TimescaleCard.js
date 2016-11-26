import React, { Component, PropTypes } from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const TitleCard = (props) => (
  <div className='top-bottom-buffer'> 
    <Card>
      <CardTitle title={props.children} />
    </Card>
  </div>
)

export default class TimescaleCard extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChangeDropdown: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    console.log('received props', nextProps)
    if (nextProps.value !== this.props.value) {
      console.log('received props', nextProps)
    }
  }

  render() {
    const { value = '6', onChangeDropdown } = this.props
    return (
      <TitleCard>
        In 
        <DropDownMenu 
          underlineStyle={{display: 'none'}} 
          style={{
            fontSize: 24,
          }} 
          value={value} 
          onChange={onChangeDropdown}
        >
          <MenuItem value={'6'} primaryText="6" />
          <MenuItem value={'12'} primaryText="12" />
        </DropDownMenu> 
        months I dream of: 
      </TitleCard>
    )
  }
}
