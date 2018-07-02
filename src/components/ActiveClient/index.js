import React from 'react';
import {Card,CardContent,Image,CardHeader,CardMeta} from 'semantic-ui-react';

import './index.css';

export default ({client}) => (
  <Card>
    <CardContent className="ActiveClient">
      <Image src={client.get('general').get('avatar')}/>
      <div>
        <CardHeader>
          {client.get('general').get('firstName')} {client.get('general').get('lastName')}
        </CardHeader>
        <CardMeta>
          {client.get('job').get('title')} - {client.get('job').get('company')}
        </CardMeta>
      </div>
    </CardContent>
  </Card>
);