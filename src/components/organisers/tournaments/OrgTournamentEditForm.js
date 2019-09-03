import React, { Component } from 'react';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { API, graphqlOperation } from 'aws-amplify';
import { updateTournament } from '../../../graphql/mutations';
import { format } from 'date-fns';
import LoaderComponent from '../../LoaderComponent';
import OrgNav from '../OrgNav';

class OrgTournamentEditForm extends Component {

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
    });
  }

  handleDescriptionChange = value => {
    this.setState({
      description: value
    });
  }

  onSubmit = async (event, tournamentId, tournament) => {
    // console.log(tournament)
    event.preventDefault();
    let startDate;
    let endDate;
    let deadline;

    if(this.state.startDate){
      startDate = format(this.state.startDate, 'D MMM, YYYY');
    } else {
      startDate = tournament.startDate;
    }

    if(this.state.endDate){
      endDate = format(this.state.endDate, 'D MMM, YYYY');
    } else {
      endDate = tournament.endDate;
    }

    if(this.state.deadline){
      deadline = format(this.state.deadline, 'D MMM, YYYY');
    } else {
      deadline = tournament.deadline;
    }

    this.setState({ error: '' });
    const input = {
      id: tournamentId,
      title: this.state.title || tournament.title,
      startDate,
      endDate,
      startTime: this.state.startTime || tournament.startTime,
      endTime: this.state.endTime || tournament.endTime,
      deadline,
      venue: this.state.venue || tournament.venue,
      description: this.state.description || tournament.description,
      url: this.state.url || tournament.url,
      createdAt: tournament.createdAt,
      tournamentUserId: ''
    };
    // console.log('Update Tournament', updateTournament)
    const result = await API.graphql(graphqlOperation(updateTournament, { input }));
    console.log({result});
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
    });
  }

  render(){
    const { tournamentId, tournament } = this.props;

    if(tournament){
      return(
        <div>
          <OrgNav/>
          <Grid centered>
            <Grid.Column style={{ maxWidth: 1000 }}>
              <Grid stackable>
                <Grid.Column width={16}>
                  <Header textAlign='left'>{tournament.title}</Header>
                </Grid.Column>
                <Grid.Column width={16}>
                  <Header.Subheader textAlign='left'>Date: {tournament.startDate} - {tournament.endDate}</Header.Subheader>
                  <Header.Subheader textAlign='left'>Time: {tournament.startTime}</Header.Subheader>
                  <Header.Subheader textAlign='left'>Venue: {tournament.venue}</Header.Subheader>
                </Grid.Column>
              </Grid>
              <hr/>
              <Header as='h2' textAlign='center'>Edit Tournament</Header>
              {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
              <Form size='large' onSubmit={(event) => this.onSubmit(event, tournamentId, tournament)}>
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
                <Button color='black' fluid size='large'>Edit</Button>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      );
    } else {
      return <LoaderComponent/>;
    }

  }
}

export default OrgTournamentEditForm;
