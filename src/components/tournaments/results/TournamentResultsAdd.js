import React, { Component } from 'react';

class TournamentResultsAdd extends Component {
  render(){
    return(
      <div>
        <nav className="nav-wraper white">
          <ul className="left">
            <li><a href="" className="grey-text">Cancel</a></li>
          </ul>
          <a href="" className="brand-logo center black-text">New Result</a>
          <ul className="right">
            <li><a href="" className="grey-text">Post</a></li>
          </ul>
        </nav>
        <form style={{ padding: 50 }}>
          <div className="input-field">
            <input
              type="text"
              id="date"
              name="date"
            />
            <label>Date</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="matchNo"
              name="matchNo"
            />
            <label>Match No</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="winner"
              name="winner"
            />
            <label>Winner</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              id="score"
              name="score"
            />
            <label>Score</label>
          </div>
        </form>
      </div>
    )
  }
}

export default TournamentResultsAdd;
