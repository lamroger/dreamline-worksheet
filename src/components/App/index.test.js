import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

import App from './index';
import MainContainer from '../MainContainer'
import DreamlineCard from '../DreamlineCard';
import TimescaleCard from '../TimescaleCard';
import NextStepsCard from '../NextStepsCard';

it('renders one <TimescaleCard/> component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(TimescaleCard)).to.have.length(1);
});

it('renders seven <DreamlineCard/> component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(DreamlineCard)).to.have.length(7);
});

