import React from 'react';
import {Card,CardContent,Input} from 'semantic-ui-react';

import './index.css';

export default ({handleSearch}) => (
  <Card>
    <CardContent>
      <Input className="Search__input" icon='search' placeholder='Search...' onChange={handleSearch}/>
    </CardContent>
  </Card>
);