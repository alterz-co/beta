import React, { Component } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { getUser } from '../../graphql/queries';
import { logoutUser } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class Profile extends Component {
  handleSignout = () => {
    this.props.onLogoutUser(this.props.history);
  };

  // state = {
  //   user: ''
  // }
  //
  // async componentDidMount() {
  //   const user = await API.graphql(graphqlOperation(getUser, { id: '08baa991-ee93-4563-9ac1-b6eb657f9527' }));
  //   this.setState({ user: user.data.getUser });
  // }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div className="container" style={{ marginTop: 100 }}>
          <div className="row">
            <div className="col s12 l12">
              <h2 className="center-align">{user ? user.name : ''}</h2>
              <p>Gender: {user ? user.gender : ''}</p>
              <p>Email: {user ? user.email : ''}</p>
              <p>Phone: {user ? user.phone : ''}</p>
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

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    onLogoutUser: history => dispatch(logoutUser(history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
