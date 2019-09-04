import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { listTournaments } from '../../graphql/queries';
import { onCreateTournament } from '../../graphql/subscriptions';

class TournamentList extends Component {
  render() {
    const onNewTournament = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery };
      const updatedTournamentList = [
        newData.onCreateTournament,
        ...prevQuery.listTournaments.items
      ];
      updatedQuery.listTournaments.items = updatedTournamentList;
      return updatedQuery;
    };

    return (
      <Connect
        query={graphqlOperation(listTournaments)}
        subscription={graphqlOperation(onCreateTournament)}
        onSubscriptionMsg={onNewTournament}
      >
      {({ data, loading, errors}) => {
        if(errors && errors.length > 0) return <p>Error</p>;
        if(loading || !data || !data.listTournaments) return <p>Loading..</p>;

        // console.log('listTournaments ', data.listTournaments.items)
        return(
          <div className="row" style={{ marginTop: 20 }}>
          {data.listTournaments.items.map(tournament => (
            <div className="col s12 l12" key={tournament.id}>
              <div className="card">
                <div className="card-content">
                  <p>{tournament.title}</p>
                  <p className="grey-text">{tournament.startDate} - {tournament.endDate}</p>
                  <p className="grey-text">{tournament.startTime}</p>
                  <p className="grey-text">{tournament.venue}</p>
                </div>
                <div className="card-action">
                  <a href={`/tournament/${tournament.id}`} className="grey-text">Details</a>
                </div>
              </div>
            </div>
          ))}
          </div>
        );
      }}
      </Connect>
    );
  }
}

export default TournamentList;
