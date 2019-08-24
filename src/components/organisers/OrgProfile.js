import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../graphql/queries';
import OrgNav from './OrgNav';

class Profile extends Component {

  state = {
    user: ""
  }

  async componentDidMount() {
    const user = await API.graphql(graphqlOperation(getUser, { id: 'e4944fd6-d985-48d3-a6a9-9f9487f164a1' }))
    this.setState({ user: user.data.getUser })
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <OrgNav/>
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
