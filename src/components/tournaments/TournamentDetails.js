import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import { getTournament } from '../../graphql/queries';
import Nav from '../Nav';
import TournamentHeader from './TournamentHeader';
import TournamentUpdates from './updates/TournamentUpdates';
import TournamentResults from './results/TournamentResults';
import TournamentSchedule from './schedule/TournamentSchedule';
import TournamentParticipants from './participants/TournamentParticipants';
import TournamentAbout from './TournamentAbout';

class TournamentDetails extends Component {
  state = {
    tournament: null
  }

  componentDidMount() {
    this.handleGetTournament();
  }

  handleGetTournament = async () => {
    const input = {
      id: this.props.match.params.id
    }
    const result = await API.graphql(graphqlOperation(getTournament, input))
    console.log({ result })
    this.setState({ tournament: result.data.getTournament })
  }

  render() {
    const tournamentId = this.props.match.params.id;
    const { tournament } = this.state;

    return (
      <div>
        <Nav/>
        <div className="container" style={{ marginTop: 40 }}>
          <TournamentHeader tournament={tournament} tournamentId={tournamentId}/>
          <div className="row">
            <div className="col s12 l12">
              <Route
                exact
                path={`/tournament/${tournamentId}`}
                render={() => <TournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
              />
              <Route
                path={`/tournament/${tournamentId}/updates`}
                render={() => <TournamentUpdates tournament={tournament} tournamentId={tournamentId}/>}
              />
              <Route
                path={`/tournament/${tournamentId}/results`}
                render={() => <TournamentResults tournament={tournament} tournamentId={tournamentId}/>}
              />
              <Route
                path={`/tournament/${tournamentId}/schedule`}
                render={() => <TournamentSchedule tournament={tournament} tournamentId={tournamentId}/>}
              />
              <Route
                path={`/tournament/${tournamentId}/participants`}
                render={() => <TournamentParticipants tournament={tournament} tournamentId={tournamentId}/>}
              />
              <Route
                path={`/tournament/${tournamentId}/about`}
                render={() => <TournamentAbout tournament={tournament} tournamentId={tournamentId}/>}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TournamentDetails;
