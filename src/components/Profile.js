import React, { Component } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import Nav from './Nav';
import { logoutUser } from '../redux/actions/userActions';
import { connect } from 'react-redux';

class Profile extends Component {
  state = {
    user: ''
  };

  async componentDidMount() {
    try {
      const user = await API.graphql(
        graphqlOperation(getUser, {
          id: '867b64d9-5d4a-421e-8af7-9720bd7b20bd'
        })
      );
      this.setState({ user: user.data.getUser });
    } catch (err) {
      console.log(err);
    }
  }

  handleSignout = () => {
    this.props.onLogoutUser(this.props.history);
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        <div className="container" style={{ marginTop: 100 }}>
          <div className="row">
            <div className="col s12 l12">
              <h2 className="center-align">{user.name}</h2>
              <p>Gender: {user.gender}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <a
                onClick={this.handleSignout}
                className="btn-small col s12 m12 l12 black white-text"
              >
                SIGN OUT
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogoutUser: history => dispatch(logoutUser(history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Profile);
