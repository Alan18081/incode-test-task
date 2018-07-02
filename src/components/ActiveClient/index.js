import React from 'react';
import {Card,CardContent,Image,CardHeader,CardMeta,Header,Icon,List,ListItem} from 'semantic-ui-react';

import './index.css';

export default ({client}) => (
  <Card className="ActiveClient">
    <CardContent className="ActiveClient__content">
      <Image src={client.get('general').get('avatar')} size="small" className="ActiveClient__image"/>
      <div>
        <CardHeader as="h2">
          {client.get('general').get('firstName')} {client.get('general').get('lastName')}
        </CardHeader>
        <CardMeta>
          {client.get('job').get('title')} - {client.get('job').get('company')}
        </CardMeta>

        <Header as="h3">
          <Icon name="mail"/>
          Contacts
        </Header>
        <List>
          <ListItem>{client.get('contact').get('email')}</ListItem>
          <ListItem>{client.get('contact').get('phone')}</ListItem>
        </List>

        <Header as="h3">
          <Icon name="address book outline"/>
          Address
        </Header>
        <List>
          <ListItem>{client.get('address').get('street')}</ListItem>
          <ListItem>{client.get('address').get('city')}</ListItem>
          <ListItem>{client.get('address').get('zipCode')}</ListItem>
          <ListItem>{client.get('address').get('company')}</ListItem>
        </List>
      </div>
    </CardContent>
  </Card>
);