import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getResult } from '../../../../graphql/queries';
import OrgTournamentResultsEditForm from './OrgTournamentResultsEditForm';
import LoaderComponent from '../../../LoaderComponent';

class OrgTournamentResultsEdit extends Component {
  state = {
    result: null
  }

  componentDidMount() {
    this.handleGetResult();
  }

  handleGetResult = async () => {
    const input = {
      id: this.props.match.params.id
    };
    const result = await API.graphql(graphqlOperation(getResult, input));
    console.log({ result });
    this.setState({ result: result.data.getResult });
  }

  render(){
    const resultId = this.props.match.params.id;
    const { result } = this.state;

    if(!result){
      return <LoaderComponent/>;
    }

    return(
      <OrgTournamentResultsEditForm resultId={resultId} result={result} />
    );
  }
}

export default OrgTournamentResultsEdit;
