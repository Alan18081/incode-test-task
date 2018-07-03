import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {fromJS} from 'immutable';
import {Card,ItemImage,ItemHeader} from 'semantic-ui-react';

import ClientItem from './index';

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

describe('<ClientItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ClientItem client={client} clicked={() => {}}/>);
  });

  it('should call clicked function on click',() => {
    const spy = sinon.spy();
    wrapper.setProps({
      client,
      clicked: spy
    });
    wrapper.find(Card).simulate('click');
    expect(spy.called);
  });

  it('should display avatar inside <ItemImage/>', () => {
    expect(wrapper.contains(<ItemImage src={client.get('general').get('avatar')}/>))
  });

  it('should display firstName and lastName inside <ItemHeader/>', () => {
    expect(
      wrapper.contains(
        <ItemHeader>
          {client.get('general').get('firstName')} {client.get('general').get('lastName')}
      </ItemHeader>)
    );
  });
});