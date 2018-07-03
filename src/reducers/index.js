import {fromJS} from 'immutable';
import {FETCH_CLIENTS_SUCCESS,GET_ACTIVE_CLIENT,SEARCH} from '../actions/types';

const initialState = fromJS({
  clients: fromJS([]),
  activeClient: null,
  query: ''
});

export default (state = initialState, {type,payload}) => {
  switch(type) {
    case FETCH_CLIENTS_SUCCESS:
      return state.set('clients',fromJS(payload));
    case GET_ACTIVE_CLIENT:
      return state.set(
        'activeClient',
        state.get('clients')
          .find(client => client.get('general').get('avatar') === payload)
      );
    case SEARCH:
      return state.set('query',payload);
    default:
      return state;
  }
}