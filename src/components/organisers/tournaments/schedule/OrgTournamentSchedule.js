import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import OrgTournamentHeader from '../OrgTournamentHeader';
import OrgTournamentScheduleAdd from './OrgTournamentScheduleAdd';
import OrgTournamentScheduleList from './OrgTournamentScheduleList';

class OrgTournamentSchedule extends Component {
  render(){
    const { tournamentId, tournament } = this.props;

    return(
      <Container>
        <OrgTournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h2' textAlign='center'>Schedule</Header>
        <OrgTournamentScheduleAdd tournamentId={tournamentId}/>
        <OrgTournamentScheduleList tournamentId={tournamentId}/>
      </Container>
    )
  }
}

export default OrgTournamentSchedule;
