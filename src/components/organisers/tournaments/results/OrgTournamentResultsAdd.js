import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { createResult } from '../../../../graphql/mutations';
import { format } from 'date-fns';

class OrgTournamentResultsAdd extends Component {

  state = {
    date: '',
    matchNo: '',
    winner: '',
    score: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit = async event => {
    event.preventDefault();
    const date = format(this.state.date, 'D MMM, YYYY');
    const newResult = {
      date,
      matchNo: this.state.matchNo,
      winner: this.state.winner,
      score: this.state.score,
      resultUserId: '',
      resultTournamentId: this.props.tournamentId
    }
    const result = await API.graphql(graphqlOperation(createResult, { input: newResult }))
    console.log('result', result.data.createResult)
    this.setState({
      date: '',
      matchNo: '',
      winner: '',
      score: ''
    });
  }

  render(){
    return(
      <Container>
        <Form size='large' onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Date</label>
            <input
              fluid='true'
              name='date'
              type='text'
              value={this.state.date}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Match No.</label>
            <input
              fluid='true'
              name='matchNo'
              type='text'
              value={this.state.matchNo}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Winner</label>
            <input
              fluid='true'
              name='winner'
              type='text'
              value={this.state.winner}
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Score</label>
            <input
              fluid='true'
              name='score'
              type='text'
              value={this.state.score}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Add Result</Button>
        </Form>
      </Container>
    )
  }
}

export default OrgTournamentResultsAdd;
