import React from 'react';
import {List} from 'semantic-ui-react';

import ClientItem from '../ClientItem/index';

const ClientsList = ({clients,chooseClient}) => (
  <List>
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