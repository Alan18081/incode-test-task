import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchClients,getActiveClient,search} from '../../actions/index';
import {selectFoundClients} from '../../selectors';
import PropTypes from 'prop-types';

import './index.css';

import ClientsList from '../../components/ClientsList/index';
import ActiveClient from '../../components/ActiveClient/index';
import Search from '../../components/Search';

export class App extends Component {
  componentDidMount() {
    this.props.onFetchClients();
  }
  handleChooseClient = index => {
    this.props.onGetActiveClient(index);
  };
  handleSearch = event => {
    const value = event.target.value;
    this.props.onSearch(value);
  };
  render() {
    const {clients,activeClient,foundClients,query} = this.props;
    return (
      <div className="App">
        <div className="App__sidebar">
          <Search handleSearch={this.handleSearch}/>
          <ClientsList clients={query ? foundClients : clients} chooseClient={this.handleChooseClient}/>
        </div>
        {activeClient && <ActiveClient client={activeClient}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.get('clients'),
  activeClient: state.get('activeClient'),
  foundClients: selectFoundClients(state),
  query: state.get('query')
});

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(fetchClients()),
  onGetActiveClient: index => dispatch(getActiveClient(index)),
  onSearch: query => dispatch(search(query))
});

App.propTypes = {
  clients: PropTypes.object.isRequired,
  foundClients: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
  onFetchClients: PropTypes.func.isRequired,
  onGetActiveClient: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
