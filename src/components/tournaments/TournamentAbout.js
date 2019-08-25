import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import LoaderComponent from '../LoaderComponent';

class TournamentAbout extends Component {
  render(){
    const { tournament } = this.props;
    // console.log('tournament ', tournament)

    if(!tournament){
      return <LoaderComponent/>
    }

    return(
      <Container style={{ marginTop: 40 }}>
        <p className="grey-text" style={{ fontWeight: 'bold' }}>DESCRIPTION</p>
        <div
          style={{ marginTop: 20, marginBottom: 50 }}
          dangerouslySetInnerHTML={{ __html: tournament.description }}
        >
        </div>
      </Container>
    )
  }
}

export default TournamentAbout;
