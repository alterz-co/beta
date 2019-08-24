import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getAnnouncement } from '../../../graphql/queries';
import OrgAnnouncementsEditForm from './OrgAnnouncementsEditForm';
import LoaderComponent from '../../LoaderComponent';

class OrgAnnouncementsEdit extends Component {
  state = {
    announcement: null
  }

  componentDidMount() {
    this.handleGetAnnouncement();
  }

  handleGetAnnouncement = async () => {
    const input = {
      id: this.props.match.params.id
    }
    const result = await API.graphql(graphqlOperation(getAnnouncement, input))
    console.log({ result })
    this.setState({ announcement: result.data.getAnnouncement })
  }

  render(){
    const announcementId = this.props.match.params.id;
    const { announcement } = this.state;

    if(!announcement){
      return <LoaderComponent/>
    }

    return(
      <OrgAnnouncementsEditForm announcementId={announcementId} announcement={announcement} />
    )
  }
}


export default OrgAnnouncementsEdit;
