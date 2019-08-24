import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header, Icon, Button, Modal } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteTournament } from '../../../graphql/mutations';
import LoaderComponent from '../../LoaderComponent';

class OrgTournamentHeader extends Component {

  handleDeleteTournament = async (tournamentId) => {
    const input = {
      id: tournamentId
    }
    // console.log('Delete Tournament', deleteTournament)
    const result = await API.graphql(graphqlOperation(deleteTournament, { input }))
    console.log({result})
  }

  render(){
    const { tournamentId, tournament } = this.props;

    if(tournament){
      return(
        <Container>
          <Grid stackable>
            <Grid.Column width={10}>
              <Header as='h2' textAlign='left'>{tournament.title}</Header>
            </Grid.Column>
            <Grid.Column width={6}></Grid.Column>
          </Grid>
          <Grid stackable>
            <Grid.Column width={10}>
              <Header.Subheader textAlign='left'>Date: {tournament.startDate} - {tournament.endDate}</Header.Subheader>
              <Header.Subheader textAlign='left'>Time: {tournament.startTime}</Header.Subheader>
              <Header.Subheader textAlign='left'>Venue: {tournament.venue}</Header.Subheader>
              <a href={tournament.url} style={{ color: 'black' }}><Icon name='linkify' />Link</a>
            </Grid.Column>
            <Grid.Column width={3} style={{ paddingTop: 40 }}>
              <Button as={Link} to={`/organisers/tournament/edit/${tournamentId}`} color='green' fluid>
                <Icon name='pencil' /> Edit
              </Button>
            </Grid.Column>
            <Grid.Column width={3} style={{ paddingTop: 40 }}>
              <Modal style={{ marginLeft: 40 }} trigger={
                <Button color='red' fluid>
                  <Icon name='pencil' /> Delete
                </Button>
              }>
                <Modal.Header>Do you want to delete this?</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Header>{tournament.title}</Header>
                    <p>Date: {tournament.startDate}</p>
                    <p>Time: {tournament.startTime}</p>
                    <p>Venue: {tournament.venue}</p>
                    <Button color='red' onClick={() => this.handleDeleteTournament(tournamentId)}>Confirm</Button>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid>
        </Container>
      )
    } else {
      return <LoaderComponent/>
    }

  }
}

export default OrgTournamentHeader;
