import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateParticipant } from '../../../../graphql/mutations';
import OrgNav from '../../OrgNav';

class OrgTournamentParticipantsEditForm extends Component {

  state = {
    name: '',
    gender: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = async (event, participantId, participant) => {
    event.preventDefault();
    const input = {
      id: participantId,
      name: this.state.name || participant.name,
      gender: this.state.gender || participant.gender,
      participantUserId: '',
      participantTournamentId: this.props.tournamentId
    };
    const res = await API.graphql(graphqlOperation(updateParticipant, { input }));
    console.log('participant', res.data.updateParticipant);
    this.setState({
      name: '',
      gender: ''
    });
  }

  render(){
    const { participantId, participant } = this.props;

    return(
      <div>
        <Container>
          <Header as='h2' textAlign='center'>Edit Participant</Header>
          <Form size='large' onSubmit={(event) => this.onSubmit(event, participantId, participant)}>
            <Form.Field>
              <label>Name</label>
              <input
                fluid='true'
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Gender</label>
              <input
                fluid='true'
                name='gender'
                type='text'
                value={this.state.gender}
                onChange={this.onChange}
              />
            </Form.Field>
            <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Edit Participant</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default OrgTournamentParticipantsEditForm;
