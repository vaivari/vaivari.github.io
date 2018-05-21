import React from 'react';
import { shallow } from 'enzyme';
import { MainPage } from './index';

it('renders select recipe placeholder text', () => {
  const wrapper = shallow(<MainPage />);
  const welcome = <h3>Select a recipe..</h3>;

  expect(wrapper).toContainReact(welcome);
});
