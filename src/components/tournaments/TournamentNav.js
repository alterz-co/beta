import React, { Component } from 'react';

class TournamentNav extends Component {
  render(){
    const { tournamentId } = this.props;

    return(
      <div className="row center-align" style={{ borderBottom: '1px solid black' }}>
        <div className="col s12 l12">
          <a href={`/tournament/${tournamentId}/updates`} className="grey-text">
            Updates
          </a>
          <a href={`/tournament/${tournamentId}/results`} className="grey-text" style={{ paddingLeft: 50 }}>
            Results
          </a>
          <a href={`/tournament/${tournamentId}/schedule`} className="grey-text" style={{ paddingLeft: 50 }}>
            Schedule
          </a>
          <a href={`/tournament/${tournamentId}/participants`} className="grey-text" style={{ paddingLeft: 50 }}>
            Participants
          </a>
          <a href={`/tournament/${tournamentId}/about`} className="grey-text" style={{ paddingLeft: 50 }}>
            About
          </a>
        </div>
      </div>
    )
  }
}

export default TournamentNav;
