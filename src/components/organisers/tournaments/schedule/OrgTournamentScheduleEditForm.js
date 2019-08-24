import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { API, graphqlOperation } from 'aws-amplify';
import { updateSchedule } from '../../../../graphql/mutations';
import OrgNav from '../../OrgNav';

class OrgTournamentScheduleEditForm extends Component {

  state = {
    description: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDescriptionChange = value => {
    this.setState({
      description: value
    });
  }

  onSubmit = async (event, scheduleId, schedule) => {
    event.preventDefault();
    const input = {
      id: scheduleId,
      description: this.state.description || schedule.description,
      scheduleTournamentId: schedule.tournament.id
    }
    const result = await API.graphql(graphqlOperation(updateSchedule, { input }))
    console.log('result', result.data.updateSchedule)
    this.setState({
      description: ''
    });
  }

  render(){
    const { scheduleId, schedule } = this.props;

    return(
      <div>
        <OrgNav/>
        <Container>
          <Header as='h2' textAlign='center'>Edit Schedule</Header>
          <Form size='large' onSubmit={(event) => this.onSubmit(event, scheduleId, schedule)}>
            <ReactQuill
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              style={{ height: 200, paddingBottom: 50 }}
            />
            <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Edit</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default OrgTournamentScheduleEditForm;
