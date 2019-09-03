import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { listResults } from '../../../../graphql/queries'
import { onCreateResult } from '../../../../graphql/subscriptions'

class OrgTournamentResultsList extends Component {
  render() {
    const { tournamentId } = this.props

    const onNewResult = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery }
      const updatedResultList = [
        newData.onCreateResult,
        ...prevQuery.listResults.items
      ]
      updatedQuery.listResults.items = updatedResultList
      return updatedQuery
    }

    return (
      <Connect
        query={graphqlOperation(listResults)}
        subscription={graphqlOperation(onCreateResult)}
        onSubscriptionMsg={onNewResult}
      >
      {({ data, loading, errors}) => {
        if(errors.length > 0) return <p>Error</p>
        if(loading || !data.listResults) return <p>Loading..</p>

        return(
          <div>
          {data.listResults.items.map(result => {
            return result.tournament.id === tournamentId && (
              <p key={result.id} className="center-align" style={{ marginTop: 50 }}>
                {result.matchNo} <span className="grey-text">({result.user.name}):</span> {result.winner}, {result.score}
                <a href={`/organisers/results/edit/${result.id}`} style={{ color: 'black', paddingLeft: 10 }}>
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

export default OrgTournamentResultsList
