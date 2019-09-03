import React, { Component } from 'react';
import LoaderComponent from '../../../LoaderComponent';
import OrgTournamentUpdatesEditForm from './OrgTournamentUpdatesEditForm';
import { API, graphqlOperation } from 'aws-amplify';
import { getUpdate } from '../../../../graphql/queries';

class OrgTournamentUpdatesEdit extends Component {
  state = {
    update: null
  }

  componentDidMount() {
    this.handleGetUpdate();
  }

  handleGetUpdate = async () => {
    const input = {
      id: this.props.match.params.id
    };
    const result = await API.graphql(graphqlOperation(getUpdate, input));
    console.log({ result });
    this.setState({ update: result.data.getUpdate });
  }

  render(){
    const updateId = this.props.match.params.id;
    const { update } = this.state;

    if(!update){
      return <LoaderComponent/>;
    }

    return(
      <OrgTournamentUpdatesEditForm updateId={updateId} update={update} />
    );
  }
}


export default OrgTournamentUpdatesEdit;
