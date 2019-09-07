import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ROUTES from './constants/routes';
import Landing from './components/Landing';
import Terms from './components/Terms';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import TournamentDetails from './components/tournaments/TournamentDetails';
import TournamentUpdatesAdd from './components/tournaments/updates/TournamentUpdatesAdd';
import TournamentResultsAdd from './components/tournaments/results/TournamentResultsAdd';
import Announcements from './components/Announcements';
import Profile from './components/Profile';
import LuckyDraw from './components/LuckyDraw';
import OrgHome from './components/organisers/OrgHome';
import OrgProfile from './components/organisers/OrgProfile';
import OrgTournamentAdd from './components/organisers/tournaments/OrgTournamentAdd';
import OrgTournamentDetails from './components/organisers/tournaments/OrgTournamentDetails';
import OrgTournamentEdit from './components/organisers/tournaments/OrgTournamentEdit';
import OrgTournamentUpdatesEdit from './components/organisers/tournaments/updates/OrgTournamentUpdatesEdit';
import OrgTournamentResultsEdit from './components/organisers/tournaments/results/OrgTournamentResultsEdit';
import OrgTournamentScheduleEdit from './components/organisers/tournaments/schedule/OrgTournamentScheduleEdit';
import OrgTournamentParticipantsEdit from './components/organisers/tournaments/participants/OrgTournamentParticipantsEdit';
import OrgAnnouncementsAdd from './components/organisers/announcements/OrgAnnouncementsAdd';
import OrgAnnouncementsEdit from './components/organisers/announcements/OrgAnnouncementsEdit';
import { fetchUser } from './redux/actions/userActions';
import AuthRoute from './components/AuthRoute';
import Nav from './components/Nav';

class App extends Component {
  componentDidMount() {
    this.props.onFetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          { this.props.user ? <Nav /> : null }
          <div style={{ marginBottom: 40 }}>
            <Switch>
              <Route exact path={ROUTES.LANDING} component={Landing} />
              <Route exact path={ROUTES.REGISTER} component={Register} />
              <Route exact path={ROUTES.TERMS} component={Terms} />
              <AuthRoute exact path={ROUTES.HOME} component={Home} />
              <AuthRoute
                path={ROUTES.TOURNAMENT_UPDATES_ADD}
                component={TournamentUpdatesAdd}
              />
              <AuthRoute
                path={ROUTES.TOURNAMENT_RESULTS_ADD}
                component={TournamentResultsAdd}
              />
              <AuthRoute
                path={ROUTES.TOURNAMENT_DETAILS}
                component={TournamentDetails}
              />
              <AuthRoute
                path={ROUTES.ANNOUNCEMENTS}
                component={Announcements}
              />
              <AuthRoute exact path={ROUTES.PROFILE} component={Profile} />
              <AuthRoute exact path={ROUTES.LUCKY_DRAW} component={LuckyDraw} />
              <AuthRoute exact path={ROUTES.ORGANISERS} component={OrgHome} />
              <AuthRoute
                exact
                path={ROUTES.ORGANISERS_PROFILE}
                component={OrgProfile}
              />
              <AuthRoute
                exact
                path={ROUTES.ORGANISERS_TOURNAMENT_ADD}
                component={OrgTournamentAdd}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_TOURNAMENT_EDIT}
                component={OrgTournamentEdit}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_TOURNAMENT_DETAILS}
                component={OrgTournamentDetails}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_UPDATES_EDIT}
                component={OrgTournamentUpdatesEdit}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_RESULTS_EDIT}
                component={OrgTournamentResultsEdit}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_SCHEDULE_EDIT}
                component={OrgTournamentScheduleEdit}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_PARTICIPANTS_EDIT}
                component={OrgTournamentParticipantsEdit}
              />
              <AuthRoute
                exact
                path={ROUTES.ORGANISERS_ANNOUNCEMENT_ADD}
                component={OrgAnnouncementsAdd}
              />
              <AuthRoute
                path={ROUTES.ORGANISERS_ANNOUNCEMENT_EDIT}
                component={OrgAnnouncementsEdit}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: () => dispatch(fetchUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
