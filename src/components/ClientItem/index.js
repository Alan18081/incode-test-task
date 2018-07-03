import React from 'react';
import {
  Item,
  ItemContent,
  ItemHeader,
  ItemImage,
  Card,
  CardContent,
  ItemMeta
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './index.css';

const ClientItem = ({client,clicked}) => (
  <Card onClick={clicked}>
    <CardContent>
      <Item className="ClientItem">
        <ItemImage src={client.get('general').get('avatar')} size="mini" circular/>
        <ItemContent className="ClientItem__text">
          <ItemHeader>
            {client.get('general').get('firstName')} {client.get('general').get('lastName')}
          </ItemHeader>
          <ItemMeta>{client.get('job').get('title')}</ItemMeta>
        </ItemContent>
      </Item>
    </CardContent>
  </Card>
);

ClientItem.propTypes = {
  client: PropTypes.object.isRequired,
  clicked: PropTypes.func.isRequired
};

export default ClientItem;