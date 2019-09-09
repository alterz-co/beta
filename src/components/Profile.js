import React, { Component } from 'react';
import { logoutUser } from '../redux/actions/userActions';
import { connect } from 'react-redux';

class Profile extends Component {

  handleSignout = () => {
    this.props.onLogoutUser(this.props.history);
  };

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
