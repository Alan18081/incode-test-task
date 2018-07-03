import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {fromJS} from 'immutable';
import {Image} from 'semantic-ui-react';

import ActiveClient from './index';

configure({adapter: new Adapter()});

const client = fromJS({
  "general": {
    "firstName": "Liana",
    "lastName": "Crooks",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
  },
  "job": {
    "company": "Ledner, Johnson and Predovic",
    "title": "Investor Functionality Coordinator"
  },
  "contact": {
    "email": "Gerry_Hackett77@gmail.com",
    "phone": "(895) 984-0132"
  },
  "address": {
    "street": "1520 Zemlak Cove",
    "city": "New Devon",
    "zipCode": "42586-7898",
    "country": "Guinea-Bissau"
  }
});

describe('<ActiveClient/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ActiveClient client={client}/>);
  });

  it('should render avatar inside Image', () => {
    expect(wrapper.contains(<Image src={client.get('general').get('avatar')}/>));
  });
});