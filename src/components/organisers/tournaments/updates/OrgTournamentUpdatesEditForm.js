import React, { Component } from 'react'
import { Container, Header, Form, Button } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { API, graphqlOperation } from 'aws-amplify'
import { updateUpdate } from '../../../../graphql/mutations'
import OrgNav from '../../OrgNav'

class OrgTournamentUpdatesEditForm extends Component {

  state = {
    description: ''
  }

  handleBodyChange = value => {
    this.setState({
      description: value
    })
  }

  onSubmit = async (event, updateId, update) => {
    event.preventDefault()
    // console.log('Updates edit ', update)
    const input = {
      id: updateId,
      description: this.state.description || update.description,
      createdAt: update.createdAt,
      updateUserId: '',
      updateTournamentId: update.tournament.id
    }
    const result = await API.graphql(graphqlOperation(updateUpdate, { input }))
    console.log('result', result.data.updateUpdate)
    this.setState({
      description: ''
    })
  }

  render(){
    const { updateId, update } = this.props

    return(
      <div>
        <OrgNav/>
        <Container stackable>
          <Header as='h2' textAlign='center'>Edit Update</Header>
          <Form size='large' onSubmit={(event) => this.onSubmit(event, updateId, update)}>
            <ReactQuill
              value={this.state.description}
              onChange={this.handleBodyChange}
              style={{ height: 200, paddingBottom: 50 }}
            />
            <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Edit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default OrgTournamentUpdatesEditForm
