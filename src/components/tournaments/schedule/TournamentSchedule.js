import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react';
import { listSchedules } from '../../../graphql/queries';
import { onCreateSchedule } from '../../../graphql/subscriptions';

class TournamentSchedule extends Component {
  render() {
    const { tournamentId } = this.props;

    const onNewSchedule = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery };
      const updatedScheduleList = [
        newData.onCreateSchedule,
        ...prevQuery.listSchedules.items
      ];
      updatedQuery.listSchedules.items = updatedScheduleList;
      return updatedQuery;
    };

    return (
      <Connect
        query={graphqlOperation(listSchedules)}
        subscription={graphqlOperation(onCreateSchedule)}
        onSubscriptionMsg={onNewSchedule}
      >
      {({ data, loading, errors}) => {
        if(errors.length > 0) return <p>Error</p>;
        if(loading || !data.listSchedules) return <p>Loading..</p>;

        return(
          <div style={{ marginTop: 10 }}>
            <div className="row">
            {data.listSchedules.items.map(schedule => {
              return schedule.tournament.id === tournamentId && (
                <div key={schedule.id} style={{ marginTop: 50 }}>
                  <Segment>
                    <div
                      style={{ marginTop: 20, marginBottom: 50 }}
                      dangerouslySetInnerHTML={{ __html: schedule.description }}
                    >
                    </div>
                  </Segment>
                </div>
              );
            })}
            </div>
          </div>
        );

      }}
      </Connect>
    );
  }
}

export default TournamentSchedule;
