import React, { Component } from 'react';
import LoaderComponent from '../../LoaderComponent';
import OrgTournamentEditForm from './OrgTournamentEditForm';
import { API, graphqlOperation } from 'aws-amplify';
import { getTournament } from '../../../graphql/queries';

class OrgTournamentEdit extends Component {
  state = {
    tournament: null
  }

  componentDidMount() {
    this.handleGetTournament();
  }

  handleGetTournament = async () => {
    const input = {
      id: this.props.match.params.id
    };
    const result = await API.graphql(graphqlOperation(getTournament, input));
    console.log({ result });
    this.setState({ tournament: result.data.getTournament });
  }

  render(){
    const tournamentId = this.props.match.params.id;
    const { tournament } = this.state;

    if(!tournament){
      return <LoaderComponent/>;
    }

    return(
      <OrgTournamentEditForm tournamentId={tournamentId} tournament={tournament}/>
    );
  }
}

export default OrgTournamentEdit;
