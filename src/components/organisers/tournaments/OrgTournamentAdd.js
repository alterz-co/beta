import React, { Component } from 'react'
import { Grid, Header, Form, Button } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { API, graphqlOperation } from 'aws-amplify'
import { createTournament } from '../../../graphql/mutations'
import { format } from 'date-fns'
import OrgNav from '../OrgNav'

class OrgTournamentAdd extends Component {

  state = {
    title: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    deadline: '',
    venue: '',
    description: '',
    url: '',
    error: ''
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

  isFormValid = () => {
    if(this.isFormEmpty(this.state)){
      this.setState({ error: 'Fill in all fields with asterisk' })
      return false
    } else if (!this.isDateValid(this.state)){
      this.setState({ error: 'Date is invalid. Date must be in this format MM-DD-YYYY e.g. 01-20-2018' })
      return false
    } else if (!this.isTimeValid(this.state)){
      this.setState({ error: 'Time is invalid. Time must be in this format e.g. 12:00 pm' })
      return false
    } else {
      return true
    }
  }

  isFormEmpty = ({ title, startDate, endDate, startTime, endTime, deadline, venue, price }) => {
    return title === '' || startDate === '' || endDate === '' || startTime === '' || endTime === '' || deadline === '' || venue === ''
  }

  isDateValid = ({ startDate, endDate, deadline }) => {
    if(!/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/i.test(startDate) || !/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/i.test(endDate) || !/^[0-9]{2}[-][0-9]{2}[-][0-9]{4}$/i.test(deadline)) {
      return false
    } else {
      return true
    }
  }

  isTimeValid = ({ startTime, endTime }) => {
    if(!/^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/i.test(startTime) || !/^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/i.test(endTime)) {
      return false
    } else {
      return true
    }
  }

  onSubmit = async event => {
    // console.log('add ', this.props.user.id)
    event.preventDefault()
    if(this.isFormValid()){
      this.setState({ error: '' })
      const startDate = format(this.state.startDate, 'D MMM, YYYY')
      const endDate = format(this.state.endDate, 'D MMM, YYYY')
      const deadline = format(this.state.deadline, 'D MMM, YYYY')
      const createdAt = format(Date.now(), 'D MMM, YYYY')
      const newTournament = {
        title: this.state.title,
        startDate,
        endDate,
        startTime: this.state.startTime,
        endTime: this.state.endTime,
        deadline,
        venue: this.state.venue,
        description: this.state.description,
        url: this.state.url,
        createdAt,
        tournamentUserId: '08baa991-ee93-4563-9ac1-b6eb657f9527'
      }
      // console.log('new Tournament', newTournament)
      const result = await API.graphql(graphqlOperation(createTournament, { input: newTournament }))
      console.log('TournamentAdd', result.data.createTournament)
      this.setState({
        title: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        deadline: '',
        venue: '',
        description: '',
        url: ''
      })
    }
  }

  render(){
    return(
      <div>
        <OrgNav/>
        <Grid centered>
          <Grid.Column style={{ maxWidth: 1000 }}>
            <Header as='h2' textAlign='center'>Add New Tournament</Header>
            {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
            <Form size='large' onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Title <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='title'
                  type='text'
                  placeholder='STA Open Singles & Doubles I 2019'
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Start Date <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='startDate'
                  type='text'
                  placeholder='MM-DD-YYYY'
                  value={this.state.startDate}
                  onChange={this.onChange}
                />
                <p>Date must be in this format MM-DD-YYYY e.g. 01-20-2018, 01-01-2018</p>
              </Form.Field>
              <Form.Field>
                <label>End Date <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='endDate'
                  type='text'
                  placeholder='MM-DD-YYYY'
                  value={this.state.endDate}
                  onChange={this.onChange}
                />
                <p>Date must be in this format MM-DD-YYYY e.g. 01-20-2018, 01-01-2018</p>
              </Form.Field>
              <Form.Field>
                <label>Start Time <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='startTime'
                  type='text'
                  placeholder='2:00pm'
                  value={this.state.startTime}
                  onChange={this.onChange}
                />
                <p>Time must be in this format HH:MM e.g. 12:00 pm</p>
              </Form.Field>
              <Form.Field>
                <label>End Time <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='endTime'
                  type='text'
                  placeholder='2:00pm'
                  value={this.state.endTime}
                  onChange={this.onChange}
                />
                <p>Time must be in this format HH:MM e.g. 12:00 pm</p>
              </Form.Field>
              <Form.Field>
                <label>Deadline <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='deadline'
                  type='text'
                  placeholder='MM-DD-YYYY'
                  value={this.state.deadline}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Venue <span style={{ color: 'red' }}>*</span></label>
                <input
                  fluid='true'
                  name='venue'
                  type='text'
                  placeholder='Where will the tournament be held?'
                  value={this.state.venue}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Form.Field><label>Description</label></Form.Field>
              <ReactQuill
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                style={{ height: 200, paddingBottom: 50 }}
              />
              <Form.Field>
                <label>Tournament URL</label>
                <input
                  fluid='true'
                  name='url'
                  type='text'
                  placeholder='e.g. https://www.singtennis.org.sg/tournament-info.aspx?id=478'
                  value={this.state.url}
                  onChange={this.onChange}
                />
              </Form.Field>
              <Button color='black' fluid size='large'>Add</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default OrgTournamentAdd
