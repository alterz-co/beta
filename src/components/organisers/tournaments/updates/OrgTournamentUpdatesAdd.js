import React, { Component } from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { API, graphqlOperation } from 'aws-amplify'
import { createUpdate } from '../../../../graphql/mutations'
import { format } from 'date-fns'

class OrgTournamentUpdatesAdd extends Component {

  state = {
    description: ''
  }

  handleBodyChange = value => {
    this.setState({
      description: value
    })
  }

  onSubmit = async (event, user) => {
    event.preventDefault()
    // console.log('onSubmit ', user.id)
    const createdAt = format(Date.now(), 'D MMM YYYY, h:mma')
    // console.log('createdAt', createdAt)
    const newUpdate = {
      description: this.state.description,
      createdAt,
      updateUserId: '',
      updateTournamentId: this.props.tournamentId
    }
    const result = await API.graphql(graphqlOperation(createUpdate, { input: newUpdate }))
    console.log('result', result.data.createUpdate)
    this.setState({
      description: ''
    })
  }

  render(){
    return(
      <Container stackable>
        <Form size='large' onSubmit={this.onSubmit}>
          <ReactQuill
            value={this.state.description}
            onChange={this.handleBodyChange}
            style={{ height: 200, paddingBottom: 50 }}
          />
          <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Post</Button>
        </Form>
      </Container>
    )
  }
}

export default OrgTournamentUpdatesAdd
