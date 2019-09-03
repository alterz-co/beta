import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { listParticipants } from '../../../../graphql/queries'
import { onCreateParticipant } from '../../../../graphql/subscriptions'

class OrgTournamentParticipantsList extends Component {
  render() {
    const { tournamentId } = this.props

    const onNewParticipant = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery }
      const updatedParticipantList = [
        newData.onCreateParticipant,
        ...prevQuery.listParticipants.items
      ]
      updatedQuery.listParticipants.items = updatedParticipantList
      return updatedQuery
    }

    return (
      <Connect
        query={graphqlOperation(listParticipants)}
        subscription={graphqlOperation(onCreateParticipant)}
        onSubscriptionMsg={onNewParticipant}
      >
      {({ data, loading, errors}) => {
        if(errors.length > 0) return <p>Error</p>
        if(loading || !data.listParticipants) return <p>Loading..</p>

        return(
          <div>
          {data.listParticipants.items.map(participant => {
            return participant.tournament.id === tournamentId && (
              <p key={participant.id} className="center-align" style={{ marginTop: 50 }}>
                {participant.name}, {participant.gender}
                <a href={`/organisers/participants/edit/${participant.id}`} style={{ color: 'black', paddingLeft: 10 }}>
                  <Icon name='pencil' />
                </a>
              </p>
            )
          })}
          </div>
        )

      }}
      </Connect>
    )
  }
}

export default OrgTournamentParticipantsList
