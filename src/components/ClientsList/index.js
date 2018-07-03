import React from 'react';
import {List} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './index.css';

import ClientItem from '../ClientItem/index';

const ClientsList = ({clients,chooseClient}) => (
  <List className="ClientsList">
    {clients.map(client => (
      <ClientItem
        key={client.get('general').get('avatar')}
        client={client}
        clicked={() => chooseClient(client.get('general').get('avatar'))}
      />
    ))}
  </List>
);

ClientsList.propTypes = {
  clients: PropTypes.object.isRequired,
  chooseClient: PropTypes.func.isRequired
};

export default ClientsList;