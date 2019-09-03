import React, { Component } from 'react'

class TournamentUpdatesAdd extends Component {
  render(){
    return(
      <div>
        <nav className="nav-wraper white">
          <ul className="left">
            <li><a href="" className="grey-text">Cancel</a></li>
          </ul>
          <a href="" className="brand-logo center black-text">New Update</a>
          <ul className="right">
            <li><a href="" className="grey-text">Post</a></li>
          </ul>
        </nav>
        <form style={{ padding: 50  }}>
          <div className="input-field">
            <label className="grey-text">Add a public update....</label>
          </div>
        </form>
      </div>
    )
  }
}

export default TournamentUpdatesAdd
