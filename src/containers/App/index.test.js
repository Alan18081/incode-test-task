import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {fromJS} from 'immutable';

import {App} from './index';
import ClientsList from '../../components/ClientsList';

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

const foundClients = fromJS([
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

describe('<App/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App
      clients={clients}
      foundClients={foundClients}
      query="Hello"
      onFetchClients={() => {}}
      onSearch={() => {}}
      onGetActiveClient={() => {}}
    />)
  });

  it('should pass foundClients if query is defined', () => {
    expect(wrapper.contains(<ClientsList clients={foundClients} chooseClient={() => {}}/>));
  });

});