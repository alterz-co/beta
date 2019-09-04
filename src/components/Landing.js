import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { loginUser } from '../redux/actions/userActions';
import { checkValidity } from '../utils/validators';
import logo from '../logos/landing.svg';

class Landing extends Component {
  state = {
    email: {
      value: '',
      valid: false,
      touched: false,
      required: true,
      isEmail: true
    },
    password: {
      value: '',
      valid: false,
      touched: false,
      required: true
    }
  };

  isFormValid = () => {
    const { email, password } = this.state;
    return email.valid && password.valid;
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onLoginUser(
      { email: email.value, password: password.value },
      this.props.history
    );
  };

  inputChangedHandler = (event, controlName) => {
    const value = event.target.value;
    const control = this.state[controlName];
    const valid = checkValidity(value, control);
    this.setState({
      [controlName]: {
        ...this.state[controlName],
        touched: true,
        value,
        valid
      }
    });
  };

  render() {
    const { user } = this.props;
    const { email, password } = this.state;
    return user ? (
      <Redirect to="/home" />
    ) : (
      <section className="section container">
        <div className="row">
          <img
            alt="logo"
            className="col s12 m12 l12"
            src={logo}
            style={{ height: 200 }}
          />
          <div className="col s12 l12">
            <form style={{ padding: 50 }} onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={email.touched && !email.valid ? 'invalid' : null}
                  onChange={event => this.inputChangedHandler(event, 'email')}
                />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className={
                    password.touched && !password.valid ? 'invalid' : null
                  }
                  onChange={event =>
                    this.inputChangedHandler(event, 'password')
                  }
                />
                <label>Password</label>
              </div>
              <p>
                Forget password?{' '}
                <a href="" className="grey-text">
                  Reset Password
                </a>
              </p>
              <input
                type="submit"
                value="Sign In"
                className="btn-large col s12 m12 l12 black white-text"
                disabled={!this.isFormValid()}
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              <p className="center-align">
                No account?{' '}
                <a href={ROUTES.REGISTER} className="grey-text">
                  Create account
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => {
  return {
    onLoginUser: (userData, history) => dispatch(loginUser(userData, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
