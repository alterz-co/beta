import React, { Component } from 'react';
import { Container, Header, Form, Button } from 'semantic-ui-react';
import { API, graphqlOperation } from 'aws-amplify';
import { updateResult } from '../../../../graphql/mutations';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import OrgNav from '../../OrgNav';

class OrgTournamentResultsEditForm extends Component {

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


  onSubmit = async (event, resultId, result) => {
    event.preventDefault();
    let date;
    if(this.state.date){
      date = format(this.state.date, 'D MMM, YYYY');
    } else {
      date = result.date;
    }

    const input = {
      id: resultId,
      date,
      matchNo: this.state.matchNo || result.matchNo,
      winner: this.state.winner || result.winner,
      score: this.state.score || result.score,
      resultUserId: this.props.user.id,
      resultTournamentId: result.tournament.id
    };
    const res = await API.graphql(graphqlOperation(updateResult, { input }));
    console.log('result', res.data.updateResult);
    this.setState({
      date: '',
      matchNo: '',
      winner: '',
      score: ''
    });
  }

  render(){
    const { resultId, result } = this.props;

    return(
      <div>
        <Container>
          <Header as='h2' textAlign='center'>Edit Result</Header>
          <Form size='large' onSubmit={(event) => this.onSubmit(event, resultId, result)}>
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
            <Button color='black' fluid size='large' style={{ marginTop: '30px' }}>Edit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(
  mapStateToProps
)(OrgTournamentResultsEditForm);
