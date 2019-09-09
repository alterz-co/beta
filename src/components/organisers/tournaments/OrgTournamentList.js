import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { listTournaments } from '../../../graphql/queries';
import { onCreateTournament } from '../../../graphql/subscriptions';

class OrgTournamentList extends Component {
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
            <Table basic='very'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Time</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
              {data.listTournaments.items.map(tournament => {
                 return (
                   <Table.Row key={tournament.id}>
                     <Table.Cell>{tournament.title}</Table.Cell>
                     <Table.Cell>{tournament.startDate}</Table.Cell>
                     <Table.Cell>{tournament.startTime}</Table.Cell>
                     <Table.Cell>
                       <Button as={Link} to={`/organisers/tournament/${tournament.id}`} basic color='black'>
                         Details
                       </Button>
                     </Table.Cell>
                   </Table.Row>
                 );
              })}
              </Table.Body>
            </Table>
          );
        }}
      </Connect>
    );
  }
}

export default OrgTournamentList;
