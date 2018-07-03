import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {fromJS} from 'immutable';

import ClientsList from './index';
import ClientItem from '../ClientItem';

configure({adapter: new Adapter()});

const clients = fromJS([
  {
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
  },
  {
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
  }
]);

describe('<ClientsList/>',  () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ClientsList clients={clients} chooseClient={() => {}}/>)
  });

  it('should render exact quantity of <ClientList/>', () => {
    expect(wrapper.find(ClientItem)).toHaveLength(clients.size);
  });
});