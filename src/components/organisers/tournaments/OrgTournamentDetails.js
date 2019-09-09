import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { getTournament } from '../../../graphql/queries';
import OrgNav from '../OrgNav';
import OrgTournamentNav from './OrgTournamentNav';
import OrgTournamentUpdates from './updates/OrgTournamentUpdates';
import OrgTournamentSchedule from './schedule/OrgTournamentSchedule';
import OrgTournamentResults from './results/OrgTournamentResults';
import OrgTournamentParticipants from './participants/OrgTournamentParticipants';
import OrgTournamentAbout from './OrgTournamentAbout';

class OrgTournamentDetails extends Component {
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

    return(
      <div>
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={3}>
            <OrgTournamentNav tournamentId={tournamentId}/>
          </Grid.Column>
          <Grid.Column width={11}>
            <Route
              exact
              path={`/organisers/tournament/${tournamentId}`}
              render={() => <OrgTournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/organisers/tournament/${tournamentId}/updates`}
              render={() => <OrgTournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/organisers/tournament/${tournamentId}/results`}
              render={() => <OrgTournamentResults tournament={tournament} tournamentId={tournamentId}/>}
            />
            <Route
              path={`/organisers/tournament/${tournamentId}/schedule`}
              render={() => <OrgTournamentSchedule tournamentId={tournamentId} tournament={tournament}/>}
            />
            <Route
              path={`/organisers/tournament/${tournamentId}/participants`}
              render={() => <OrgTournamentParticipants tournamentId={tournamentId} tournament={tournament}/>}
            />
            <Route
              path={`/organisers/tournament/${tournamentId}/about`}
              render={() => <OrgTournamentAbout tournament={tournament} tournamentId={tournamentId}/>}
            />
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default OrgTournamentDetails;
