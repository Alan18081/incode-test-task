import {fromJS} from 'immutable';
import {FETCH_CLIENTS_SUCCESS,GET_ACTIVE_CLIENT} from '../actions/types';

const initialState = fromJS({
  clients: fromJS([]),
  activeClient: null,
  foundClients: fromJS([])
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
    default:
      return state;
  }
}