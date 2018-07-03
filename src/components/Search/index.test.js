import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {Input} from 'semantic-ui-react';

import Search from './index';

configure({adapter: new Adapter()});

describe('<Search/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Search handleSearch={() => {}}/>);
  });

  it('should call handleSearch on change of input', () => {
    const spy = sinon.spy();
    wrapper.setProps({
      handleSearch: spy
    });
    wrapper.find(Input).simulate('change');
    expect(spy.called);
  });
});