import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchClients,getActiveClient} from '../../actions/index';

import './index.css';

import ClientsList from '../../components/ClientsList/index';
import ActiveClient from '../../components/ActiveClient/index';

class App extends Component {
  componentDidMount() {
    this.props.onFetchClients();
  }
  handleChooseClient = index => {
    this.props.onGetActiveClient(index);
  };
  render() {
    const {clients,activeClient} = this.props;
    return (
      <div className="App">
        <ClientsList clients={clients} chooseClient={this.handleChooseClient}/>
        {activeClient && <ActiveClient client={activeClient}/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clients: state.get('clients'),
  activeClient: state.get('activeClient')
});

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(fetchClients()),
  onGetActiveClient: (index) => dispatch(getActiveClient(index))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
