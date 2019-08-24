import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Landing from './components/Landing';
import Register from './components/Register';
import OrgHome from './components/organisers/OrgHome';
import OrgProfile from './components/organisers/OrgProfile';
import OrgTournamentAdd from './components/organisers/tournaments/OrgTournamentAdd';
import OrgTournamentDetails from './components/organisers/tournaments/OrgTournamentDetails';
import OrgTournamentEdit from './components/organisers/tournaments/OrgTournamentEdit';
import OrgTournamentUpdatesEdit from './components/organisers/tournaments/updates/OrgTournamentUpdatesEdit';
import OrgTournamentResultsEdit from './components/organisers/tournaments/results/OrgTournamentResultsEdit';
import OrgTournamentScheduleEdit from './components/organisers/tournaments/schedule/OrgTournamentScheduleEdit';
import OrgAnnouncementsAdd from './components/organisers/announcements/OrgAnnouncementsAdd';
import OrgAnnouncementsEdit from './components/organisers/announcements/OrgAnnouncementsEdit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.REGISTER} component={Register}/>
          <Route exact path={ROUTES.ORGANISERS} component={OrgHome}/>
          <Route exact path={ROUTES.ORGANISERS_PROFILE} component={OrgProfile}/>
          <Route exact path={ROUTES.ORGANISERS_TOURNAMENT_ADD} component={OrgTournamentAdd}/>
          <Route path={ROUTES.ORGANISERS_TOURNAMENT_EDIT} component={OrgTournamentEdit}/>
          <Route path={ROUTES.ORGANISERS_TOURNAMENT_DETAILS} component={OrgTournamentDetails}/>
          <Route path={ROUTES.ORGANISERS_UPDATES_EDIT} component={OrgTournamentUpdatesEdit}/>
          <Route path={ROUTES.ORGANISERS_RESULTS_EDIT} component={OrgTournamentResultsEdit}/>
          <Route path={ROUTES.ORGANISERS_SCHEDULE_EDIT} component={OrgTournamentScheduleEdit}/>
          <Route exact path={ROUTES.ORGANISERS_ANNOUNCEMENT_ADD} component={OrgAnnouncementsAdd}/>
          <Route path={ROUTES.ORGANISERS_ANNOUNCEMENT_EDIT} component={OrgAnnouncementsEdit}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
