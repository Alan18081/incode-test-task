import {
  FETCH_CLIENTS,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_FAILED,
  GET_ACTIVE_CLIENT,
  SEARCH
} from './types';

export const fetchClients = () => ({
  type: FETCH_CLIENTS
});

export const fetchClientsSuccess = clients => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients
});

export const fetchClientsFailed = () => ({
  type: FETCH_CLIENTS_FAILED
});

export const getActiveClient = index => ({
  type: GET_ACTIVE_CLIENT,
  payload: index
});

export const search = query => ({
  type: SEARCH,
  payload: query
});