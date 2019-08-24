import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getSchedule } from '../../../../graphql/queries';
import OrgTournamentScheduleEditForm from './OrgTournamentScheduleEditForm';
import LoaderComponent from '../../../LoaderComponent';

class OrgTournamentScheduleEdit extends Component {
  state = {
    schedule: null
  }

  componentDidMount() {
    this.handleGetSchedule();
  }

  handleGetSchedule = async () => {
    const input = {
      id: this.props.match.params.id
    }
    const result = await API.graphql(graphqlOperation(getSchedule, input))
    console.log({ result })
    this.setState({ schedule: result.data.getSchedule })
  }

  render(){
    const scheduleId = this.props.match.params.id;
    const { schedule } = this.state;

    if(!schedule){
      return <LoaderComponent/>
    }

    return(
      <OrgTournamentScheduleEditForm scheduleId={scheduleId} schedule={schedule} />
    )
  }
}

export default OrgTournamentScheduleEdit;
