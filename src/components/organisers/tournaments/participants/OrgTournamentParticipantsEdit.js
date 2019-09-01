import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getParticipant } from '../../../../graphql/queries';
import OrgTournamentParticipantsEditForm from './OrgTournamentParticipantsEditForm';

class OrgTournamentParticipantsEdit extends Component {
  state = {
    participant: ''
  }

  componentDidMount() {
    this.handleGetParticipant();
  }

  handleGetParticipant = async () => {
    const input = {
      id: this.props.match.params.id
    }
    const participant = await API.graphql(graphqlOperation(getParticipant, input))
    console.log({ participant })
    this.setState({ result: participant.data.getParticipant })
  }

  render(){
    const participantId = this.props.match.params.id;
    const { participant } = this.state;

    return(
      <OrgTournamentParticipantsEditForm participantId={participantId} participant={participant} />
    )
  }
}

export default OrgTournamentParticipantsEdit;
