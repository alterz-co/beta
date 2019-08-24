import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import OrgTournamentHeader from '../OrgTournamentHeader';
import OrgTournamentUpdatesAdd from './OrgTournamentUpdatesAdd';
import OrgTournamentUpdatesList from './OrgTournamentUpdatesList';

class OrgTournamentUpdates extends Component {
  render(){
    const { tournamentId, tournament } = this.props;

    return(
      <Container>
        <OrgTournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h2' textAlign='center'>Updates</Header>
        <OrgTournamentUpdatesAdd tournamentId={tournamentId}/>
        <OrgTournamentUpdatesList tournamentId={tournamentId}/>
      </Container>
    )
  }
}

export default OrgTournamentUpdates;
