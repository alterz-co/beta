import React, { Component } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { API, graphqlOperation } from 'aws-amplify'
import { createSchedule } from '../../../../graphql/mutations'

class OrgTournamentScheduleAdd extends Component {

  state = {
    description: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDescriptionChange = value => {
    this.setState({
      description: value
    })
  }

  onSubmit = async event => {
    event.preventDefault()
    const newSchedule = {
      description: this.state.description,
      scheduleTournamentId: this.props.tournamentId
    }
    const result = await API.graphql(graphqlOperation(createSchedule, { input: newSchedule }))
    console.log('result', result.data.createSchedule)
    this.setState({
      description: ''
    })
  }

  render(){
    return(
      <Container>
        <Form size='large' onSubmit={this.onSubmit}>
          <ReactQuill
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            style={{ height: 200, paddingBottom: 50 }}
          />
          <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Add Schedule</Button>
        </Form>
      </Container>
    )
  }
}

export default OrgTournamentScheduleAdd
