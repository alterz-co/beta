import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import OrgNav from './OrgNav';
import OrgTournamentList from './tournaments/OrgTournamentList';
import OrgAnnouncements from './announcements/OrgAnnouncements';

class OrgHome extends Component {

  render() {
    return (
      <div>
        <OrgNav/>
        <Grid stackable>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={10}>
            <Header as='h2' style={{ marginBottom: 40 }}>
              <span role="img" aria-label="tennis-ball">🎾</span> Your Tournaments
            </Header>
            <OrgTournamentList/>
          </Grid.Column>
          <Grid.Column width={4}>
            <OrgAnnouncements/>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default OrgHome;
