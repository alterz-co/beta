import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { listUpdates } from '../../../graphql/queries';
import { onCreateUpdate } from '../../../graphql/subscriptions';
import TournamentUpdatesFooter from './TournamentUpdatesFooter';

class TournamentUpdates extends Component {

  render(){
    const { tournamentId } = this.props;

    const onNewUpdate = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery };
      const updatedUpdateList = [
        newData.onCreateUpdate,
        ...prevQuery.listUpdates.items
      ];
      updatedQuery.listUpdates.items = updatedUpdateList;
      return updatedQuery;
    };

    return(
      <Connect
        query={graphqlOperation(listUpdates)}
        subscription={graphqlOperation(onCreateUpdate)}
        onSubscriptionMsg={onNewUpdate}
      >
      {({ data, loading, errors}) => {
        if(errors.length > 0) return <p>Error</p>;
        if(loading || !data.listUpdates) return <p>Loading..</p>;

        return(
          <div style={{ marginTop: 10 }}>
            <div className="row">
            {data.listUpdates.items.map(update => {
              return update.tournament.id === tournamentId && (
                <div className="col s12 l12" key={update.id}>
                  <div className="card">
                    <div className="card-content">
                      <p style={{ fontWeight: 'bold' }}>{update.user.name}</p>
                      <p className="grey-text">{update.createdAt}</p>
                      <div
                        style={{ marginTop: 20, marginBottom: 50 }}
                        dangerouslySetInnerHTML={{ __html: update.description }}
                      >
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            <TournamentUpdatesFooter tournamentId={tournamentId}/>
          </div>
        );

      }}
      </Connect>
    );

  }
}

export default TournamentUpdates;
