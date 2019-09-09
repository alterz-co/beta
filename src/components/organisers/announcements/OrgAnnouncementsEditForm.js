import React, { Component } from 'react';
import { Grid, Header, Form, Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { API, graphqlOperation } from 'aws-amplify';
import { updateAnnouncement } from '../../../graphql/mutations';
import OrgNav from '../OrgNav';

class OrgAnnouncementsEditForm extends Component {

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

  onSubmit = async (event, announcementId, announcement) => {
    event.preventDefault();
    // console.log('user ', user)
    const input = {
      id: announcementId,
      title: this.state.title || announcement.title,
      description: this.state.description || announcement.description,
      announcementUserId: ''
    };
    const result = await API.graphql(graphqlOperation(updateAnnouncement, { input }));
    console.log('result', result);
    this.setState({
      title: '',
      description: ''
    });
  }

  render(){
    const { announcementId, announcement } = this.props;

    return(
      <div>
        <Grid centered>
          <Grid.Column style={{ maxWidth: 800 }}>
            <Header as='h2' textAlign='center'>Edit Announcement</Header>
            <Form size='large' onSubmit={(event) => this.onSubmit(event, announcementId, announcement)}>
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
              <Button color='black' fluid size='large'>Edit</Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

}

export default OrgAnnouncementsEditForm;
