import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import OrgTournamentHeader from '../OrgTournamentHeader';
import OrgTournamentResultsAdd from './OrgTournamentResultsAdd';
import OrgTournamentResultsList from './OrgTournamentResultsList';

class OrgTournamentResults extends Component {
  render(){
    const { tournamentId, tournament } = this.props;

    return(
      <Container>
        <OrgTournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h2' textAlign='center'>Results</Header>
        <OrgTournamentResultsAdd tournamentId={tournamentId}/>
        <OrgTournamentResultsList tournamentId={tournamentId}/>
      </Container>
    )
  }
}

export default OrgTournamentResults;
