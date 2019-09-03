import React, { Component } from 'react'
import LoaderComponent from '../LoaderComponent'
import TournamentNav from './TournamentNav'

class TournamentHeader extends Component {

  render(){
    const { tournament, tournamentId } = this.props

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <div>
        <p className="center-align" style={{ marginBottom: 40, fontWeight: 'bold', fontSize: 15 }}>{tournament.title}</p>
        <p style={{ fontWeight: 'bold' }}>Date: <span style={{ fontWeight: 'normal' }}>{tournament.startDate}</span></p>
        <p style={{ fontWeight: 'bold' }}>Time: <span style={{ fontWeight: 'normal' }}>{tournament.startTime}</span></p>
        <p style={{ fontWeight: 'bold' }}>Venue: <span style={{ fontWeight: 'normal' }}>{tournament.venue}</span></p>
        <p style={{ paddingBottom: 20 }}><a href={tournament.url} className="black-text">Link</a></p>
        <TournamentNav tournamentId={tournamentId}/>
      </div>
    )
  }
}

export default TournamentHeader
