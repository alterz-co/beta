import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import OrgTournamentHeader from '../OrgTournamentHeader';
import OrgTournamentParticipantsAdd from './OrgTournamentParticipantsAdd';
import OrgTournamentParticipantsList from './OrgTournamentParticipantsList';

class OrgTournamentParticipants extends Component {
  render(){
    const { tournamentId, tournament } = this.props;

    return(
      <Container>
        <OrgTournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h2' textAlign='center'>Participants</Header>
        <OrgTournamentParticipantsAdd tournamentId={tournamentId}/>
        <OrgTournamentParticipantsList tournamentId={tournamentId}/>
      </Container>
    )
  }
}

export default OrgTournamentParticipants;
