import React, { Component } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import OrgTournamentHeader from './OrgTournamentHeader';
import LoaderComponent from '../../LoaderComponent';

class OrgTournamentAbout extends Component {
  render(){
    const { tournamentId, tournament } = this.props;
    // console.log('tournament ', tournament)

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <Container>
        <OrgTournamentHeader tournamentId={tournamentId} tournament={tournament}/>
        <Divider/>
        <Header as='h3' style={{ color: '#bdbdbd' }}>DESCRIPTION</Header>
        <div
          style={{ marginTop: 20, marginBottom: 50 }}
          dangerouslySetInnerHTML={{ __html: tournament.description }}
        >
        </div>
      </Container>
    )
  }
}

export default OrgTournamentAbout;
