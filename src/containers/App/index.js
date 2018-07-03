import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchClients,getActiveClient,search} from '../../actions/index';
import {selectFoundClients} from '../../selectors';
import PropTypes from 'prop-types';
import {Dimmer,Loader} from 'semantic-ui-react';

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
    let content = (
      <Dimmer active inverted>
        <Loader size='big'>Loading clients</Loader>
      </Dimmer>
    );
    if(clients.size > 0) {
      content = (
        <div className="App">
          <div className="App__sidebar">
            <Search handleSearch={this.handleSearch}/>
            <ClientsList
              clients={query ? foundClients : clients}
              chooseClient={this.handleChooseClient}
              activeId={activeClient && activeClient.get('general').get('avatar')}
            />
          </div>
          {activeClient && <ActiveClient client={activeClient}/>}
        </div>
      )
    }
    return content;
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
