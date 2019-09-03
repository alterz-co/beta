import React, { Component } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import { API, graphqlOperation } from 'aws-amplify'
import { createParticipant } from '../../../../graphql/mutations'

class OrgTournamentParticipantsAdd extends Component {

  state = {
    name: '',
    gender: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async event => {
    event.preventDefault()
    const newParticipant = {
      name: this.state.name,
      gender: this.state.gender,
      participantUserId: '867b64d9-5d4a-421e-8af7-9720bd7b20bd',
      participantTournamentId: this.props.tournamentId
    }
    const participant = await API.graphql(graphqlOperation(createParticipant, { input: newParticipant }))
    console.log('participant', participant.data.createParticipant)
    this.setState({
      name: '',
      gender: ''
    })
  }

  render(){
    return(
      <Container>
        <Form size='large' onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              name='name'
              type='text'
              value={this.state.name}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <input
              name='gender'
              type='text'
              value={this.state.gender}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Add Participant</Button>
        </Form>
      </Container>
    )
  }
}

export default OrgTournamentParticipantsAdd
