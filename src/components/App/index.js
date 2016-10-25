import React, {Component} from 'react';
import MainContainer from '../MainContainer'
import DreamlineCard from '../DreamlineCard';
import TimescaleCard from '../TimescaleCard';
import NextStepsCard from '../NextStepsCard';
import './style.css';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <MainContainer>
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md-12'>
              <TimescaleCard/> 
            </div>
          </div>
          <div className='steps col-md-12'>
            <div className='row'>
              <div className='col-md-4'>
                <DreamlineCard
                  title='Having'
                  exampleLine='Audi R8'
                />
              </div>
              <div className='col-md-4'>
                <DreamlineCard
                  title='Cost'
                  exampleLine='$2,003/month'
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4'>
                <DreamlineCard
                  title='Being'
                  exampleLine='Able to play a Jazz piano piece'
              />
            </div>
            <div className='col-md-4'>
              <DreamlineCard
                title='Doing'
                exampleLine='Practice 1 hour a week through an online course'
              />
            </div>
            <div className='col-md-4'>
              <DreamlineCard
                title='Cost'
                exampleLine='$0'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <DreamlineCard
                title='Doing'
                exampleLine='Autocross in my WRX'
              />
            </div>
            <div className='col-md-4'>
              <DreamlineCard
                title='Cost'
                exampleLine='$500'
              />
            </div>
          </div>
          <hr/>
        </div>
        <div className='actionItems col-md-12'>
          <NextStepsCard/> 
        </div>
        </div>
      </MainContainer>
    )
  }
}
