import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import Nav from './Nav';

class Profile extends Component {

  state = {
    user: ""
  }

  async componentDidMount() {
    const user = await API.graphql(graphqlOperation(getUser, { id: '4f4df45e-1be9-430f-9dad-42ec50a7cb0d' }))
    this.setState({ user: user.data.getUser })
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <Nav/>
        <div className="container" style={{ marginTop: 100 }}>
          <div className="row">
            <div className="col s12 l12">
              <h2 className="center-align">{user.name}</h2>
              <p>Gender: {user.gender}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <a className="btn-small col s12 m12 l12 black white-text">
                SIGN OUT
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
