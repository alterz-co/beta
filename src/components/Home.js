import React, { Component } from 'react';
import Nav from './Nav';
import TournamentList from './tournaments/TournamentList';

class Home extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <div className="container" style={{ marginTop: 20 }}>
          <div className="row">
            <div className="col s12 l12">
              <p style={{ fontSize: 20, fontWeight: 'bold' }}>
                <span role="img" aria-label="tennis-ball" style={{ paddingRight: 20 }}>🎾</span>
                Tournaments
              </p>
              <TournamentList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
