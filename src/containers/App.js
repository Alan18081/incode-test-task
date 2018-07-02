import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchClients,getActiveClient} from '../actions';

import ClientsList from '../components/ClientsList/index';

class App extends Component {
  componentDidMount() {
    this.props.onFetchClients();
  }
  handleChooseClient = index => {
    this.props.onGetActiveClient(index);
  };
  render() {
    const {clients} = this.props;
    return (
      <div>
        <ClientsList clients={clients} chooseClient={this.handleChooseClient}/>
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
