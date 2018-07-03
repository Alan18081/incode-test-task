import reducer from './index';
import {fromJS} from 'immutable';
import {FETCH_CLIENTS_SUCCESS,GET_ACTIVE_CLIENT,SEARCH} from '../actions/types';

const initialState = fromJS({
  clients: fromJS([]),
  activeClient: null,
  query: ''
});

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

const state = fromJS({
  clients,
  activeClient: null,
  query: ''
});

describe('Main reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined,{})).toEqual(initialState);
  });

  it('should return just state if no action provided', () => {
    expect(reducer(state,{})).toEqual(state);
  });

  it('should set clients', () => {
    expect(reducer(undefined,{
      type: FETCH_CLIENTS_SUCCESS,
      payload: clients
    })).toEqual(fromJS({
      clients,
      activeClient: null,
      query: ''
    }));
  });

  it('should set active client', () => {
    expect(reducer(
      state,
      {
        type: GET_ACTIVE_CLIENT,
        payload: clients.get(0).get('general').get('avatar')
      }))
      .toEqual(fromJS({
        clients,
        activeClient: clients.get(0),
        query: ''
      }));
  });

  it('should set query string', () => {
    expect(reducer(undefined,{
      type: SEARCH,
      payload: 'Hello'
    })).toEqual(fromJS({
      clients: fromJS([]),
      activeClient: null,
      query: 'Hello'
    }));
  });

});