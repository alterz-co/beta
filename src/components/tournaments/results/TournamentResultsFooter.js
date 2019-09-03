import React, { Component } from 'react';

class TournamentResultsFooter extends Component {

  render(){

    return(
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
        <div className="row right-align" style={{ paddingRight: 100, paddingBottom: 50 }}>
          <a
            href={`/tournament/${this.props.tournamentId}/results/add`}
            className="btn-floating btn-large waves-effect waves-light black"
          >
            <i className="material-icons">add</i>
          </a>
        </div>
      </div>
    );

  }
}

export default TournamentResultsFooter;
