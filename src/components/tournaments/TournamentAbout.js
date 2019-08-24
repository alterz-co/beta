import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
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
        <p className="center-align" style={{ fontWeight: 'bold' }}>About</p>
        <Header as='h3' style={{ color: '#bdbdbd' }}>DESCRIPTION</Header>
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
