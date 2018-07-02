import React from 'react';
import {List} from 'semantic-ui-react';

import './index.css';

import ClientItem from '../ClientItem/index';

const ClientsList = ({clients,chooseClient}) => (
  <List className="ClientsList">
    {clients.map((client,i) => (
      <ClientItem
        key={client.get('general').get('avatar')}
        client={client}
        clicked={() => chooseClient(client.get('general').get('avatar'))}
      />
    ))}
  </List>
);

export default ClientsList;