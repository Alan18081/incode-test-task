import React from 'react';
import {Card,CardContent,Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './index.css';

const Search = ({handleSearch}) => (
  <Card>
    <CardContent>
      <Input className="Search__input" icon='search' placeholder='Search...' onChange={handleSearch}/>
    </CardContent>
  </Card>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;