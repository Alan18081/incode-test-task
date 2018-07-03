import React from 'react';
import {Item,Card,CardContent} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './index.css';

const ClientItem = ({client,clicked}) => (
  <Card onClick={clicked}>
    <CardContent>
      <Item className="ClientItem">
        <Item.Image src={client.get('general').get('avatar')} size="mini" circular/>
        <Item.Content className="ClientItem__text">
          <Item.Header>
            {client.get('general').get('firstName')} {client.get('general').get('lastName')}
          </Item.Header>
          <Item.Meta>{client.get('job').get('title')}</Item.Meta>
        </Item.Content>
      </Item>
    </CardContent>
  </Card>
);

ClientItem.propTypes = {
  client: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
};

export default ClientItem;