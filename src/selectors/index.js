import {createSelector} from 'reselect';
import {nestedSearch} from '../helpers/search';

const getQuery = state => state.get('query');
const getClients = state => state.get('clients');

const findClientsByQuery = (clients,query) => {
  return clients.filter(client => {
    return nestedSearch(client.toJS(),query);
  });
};

export const selectFoundClients = createSelector(
  getClients,
  getQuery,
  findClientsByQuery
);