import React, { Component } from 'react';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { format } from 'date-fns';
import { API, graphqlOperation } from 'aws-amplify';
import { createAnnouncement } from '../../../graphql/mutations';
import OrgNav from '../OrgNav';

class OrgAnnouncementsAdd extends Component {

  state = {
    title: '',
    description: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleBodyChange = value => {
    this.setState({
      description: value
    });
  }

  onSubmit = async event => {
    event.preventDefault();
    const createdAt = format(Date.now(), 'D MMM YYYY, h:mma');
    const newAnnouncement = {
      title: this.state.title,
      description: this.state.description,
      createdAt,
      announcementUserId: ''
    };
    const result = await API.graphql(graphqlOperation(createAnnouncement, { input: newAnnouncement }));
    console.log('result', result.data.createAnnouncement);
    this.setState({
      title: '',
      description: ''
    });
  }

  render(){
    return(
      <div>
        <OrgNav/>
        <Grid centered>
          <Grid.Column style={{ maxWidth: 800 }}>
            <Header as='h2' textAlign='center'>Add New Announcement</Header>
            <Form size='large' onSubmit={this.onSubmit}>
              <Form.Field>
                <label>Title</label>
                <input
                  fluid='true'
                  name='title'
                  type='text'
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </Form.Field>
              <ReactQuill
                value={this.state.description}
                onChange={this.handleBodyChange}
                style={{ height: 200, paddingBottom: 50 }}
              />
              <Button color='black' fluid size='large'>Add</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default OrgAnnouncementsAdd;
