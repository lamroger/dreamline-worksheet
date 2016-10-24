import React from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class DreamlineCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='top-bottom-buffer'>
        <Card>
          <CardTitle title={this.props.title} />
          <CardText>
            <ol>
              <li>
                <TextField
                  hintText={this.props.exampleLine}
                  fullWidth={true}
                  name='first'
                  multiLine={true}
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='second'
                  multiLine={true}
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='third'
                  multiLine={true}
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='fourth'
                  multiLine={true}
                />
              </li>
              <li>
                <TextField
                  fullWidth={true}
                  name='fifth'
                  multiLine={true}
                />
              </li>
            </ol>
          </CardText>
        </Card>
      </div>
    );
  }
}
