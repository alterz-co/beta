import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button, Feed } from 'semantic-ui-react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { listUpdates } from '../../../../graphql/queries';
import { onCreateUpdate } from '../../../../graphql/subscriptions';

class OrgTournamentUpdatesList extends Component {
  render() {
    const { tournamentId } = this.props;

    const onNewUpdate = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery };
      const updatedUpdateList = [
        newData.onCreateUpdate,
        ...prevQuery.listUpdates.items
      ]
      updatedQuery.listUpdates.items = updatedUpdateList;
      return updatedQuery;
    }

    return (
      <Connect
        query={graphqlOperation(listUpdates)}
        subscription={graphqlOperation(onCreateUpdate)}
        onSubscriptionMsg={onNewUpdate}
      >
      {({ data, loading, errors}) => {
        if(errors.length > 0) return <p>Error</p>
        if(loading || !data.listUpdates) return <p>Loading..</p>

        return(
          <Feed>
          {data.listUpdates.items.map(update => {
            return update.tournament.id === tournamentId && (
              <Feed.Event key={update.id} style={{ padding: 20 }}>
                <Feed.Content>
                  <Button as={Link} to={`/organisers/updates/edit/${update.id}`} basic color='black' floated='right'>
                    <Icon name='pencil' /> Edit
                  </Button>
                  <Feed.Summary>
                    <Feed.User style={{ color: 'black', fontSize: 18 }}>{update.user.name}</Feed.User>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Date>{update.createdAt}</Feed.Date>
                  </Feed.Meta>
                  <Feed.Extra text>
                    <div
                      style={{ marginTop: 20, marginBottom: 50 }}
                      dangerouslySetInnerHTML={{ __html: update.description }}
                    >
                    </div>
                  </Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            )
          })}
          </Feed>
        )

      }}
      </Connect>
    );
  }
}

export default OrgTournamentUpdatesList;
