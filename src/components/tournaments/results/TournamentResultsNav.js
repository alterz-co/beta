import React, { Component } from 'react';

class TournamentResultsNav extends Component {
  render(){
    return(
      <div className="row center-align" style={{ borderBottom: '1px solid black' }}>
        <div className="col s3 l3 black-text" style={{ fontWeight: 'bold' }}>
          <p style={{ marginTop: -10 }}>Sun</p>
          <p style={{ marginTop: -10, marginBottom: 10 }}>03</p>
        </div>
        <div className="col s3 l3 grey-text">
          <p style={{ marginTop: -10 }}>Mon</p>
          <p style={{ marginTop: -10, marginBottom: 10 }}>04</p>
        </div>
        <div className="col s3 l3 grey-text">
          <p style={{ marginTop: -10 }}>Tues</p>
          <p style={{ marginTop: -10, marginBottom: 10 }}>05</p>
        </div>
        <div className="col s3 l3 grey-text">
          <p style={{ marginTop: -10 }}>Wed</p>
          <p style={{ marginTop: -10, marginBottom: 10 }}>06</p>
        </div>
      </div>
    )
  }
}

export default TournamentResultsNav;
