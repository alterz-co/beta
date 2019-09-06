import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import logo from '../logos/landing.svg';
// import { API, graphqlOperation } from 'aws-amplify';
// import { registerUser } from '../graphql/mutations';
import { registerUser } from '../redux/actions/userActions';
import { checkValidity } from '../utils/validators';

class Register extends Component {
  state = {
    name: {
      value: '',
      valid: false,
      touched: false,
      required: true
    },
    gender: {
      value: '',
      valid: false,
      touched: false,
      required: true
    },
    email: {
      value: '',
      valid: false,
      touched: false,
      required: true,
      isEmail: true
    },
    phone: {
      value: '',
      valid: false,
      touched: false,
      required: true
    },
    password: {
      value: '',
      valid: false,
      touched: false,
      required: true
    },
    error: ''
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

  isFormValid = () => {
    const { name, gender, email, phone, password } = this.state;
    return (
      name.valid && gender.valid && email.valid && phone.valid && password.valid
    );
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (this.isFormValid()) {
      this.setState({ error: '' });
      const { name, gender, email, phone, password } = this.state;
      const newUser = {
        name: name.value,
        gender: gender.value,
        email: email.value,
        phone: phone.value,
        password: password.value
      };
      this.props.onRegisterUser(newUser, this.props.history);
      // console.log(newUser);
      // const result = await API.graphql(
      //   graphqlOperation(registerUser, { input: newUser })
      // );
      // console.log('Register', result.data.registerUser);
      this.setState({
        name: {
          value: '',
          ...this.state.name
        },
        gender: {
          value: '',
          ...this.state.gender
        },
        email: {
          value: '',
          ...this.state.email
        },
        phone: {
          value: '',
          ...this.state.phone
        },
        password: {
          value: '',
          ...this.state.password
        }
      });
    }
  };

  render() {
    const { user, isLoading, error } = this.props;
    const { name, gender, email, phone, password } = this.state;
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
            {error && (
              <p className="red-text center-align">{error}</p>
            )}
            <form
              style={{ paddingLeft: 50, paddingRight: 50 }}
              onSubmit={this.handleSubmit}
            >
              <div className="input-field">
                <input
                  className={name.touched && !name.valid ? 'invalid' : null}
                  type="text"
                  id="name"
                  name="name"
                  value={name.value}
                  onChange={event => this.inputChangedHandler(event, 'name')}
                />
                <label>Name *</label>
              </div>
              <div className="input-field">
                <p>
                  <label>
                    <input
                      name="gender"
                      className={
                        gender.touched && !gender.valid ? 'invalid' : null
                      }
                      type="checkbox"
                      value="Male"
                      checked={gender.value === 'Male'}
                      onChange={event =>
                        this.inputChangedHandler(event, 'gender')
                      }
                    />
                    <span>Male</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      name="gender"
                      className={
                        gender.touched && !gender.valid ? 'invalid' : null
                      }
                      type="checkbox"
                      value="Female"
                      checked={gender.value === 'Female'}
                      onChange={event =>
                        this.inputChangedHandler(event, 'gender')
                      }
                    />
                    <span>Female</span>
                  </label>
                </p>
              </div>
              <div className="input-field">
                <input
                  type="email"
                  className={email.touched && !email.valid ? 'invalid' : null}
                  id="email"
                  name="email"
                  value={email.value}
                  onChange={event => this.inputChangedHandler(event, 'email')}
                />
                <label>Email *</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  className={phone.touched && !phone.valid ? 'invalid' : null}
                  id="phone"
                  name="phone"
                  value={phone.value}
                  onChange={event => this.inputChangedHandler(event, 'phone')}
                />
                <label>Phone number *</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  className={
                    password.touched && !password.valid ? 'invalid' : null
                  }
                  id="password"
                  name="password"
                  value={password.value}
                  onChange={event =>
                    this.inputChangedHandler(event, 'password')
                  }
                />
                <label>Password *</label>
              </div>
              <input
                disabled={isLoading || !this.isFormValid()}
                type="submit"
                value={ isLoading ? 'Registering...' : 'Create Account' }
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              <p className="center-align">
                Have an account?{' '}
                <a href={ROUTES.LANDING} className="grey-text">
                  Sign In
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    isLoading: state.ui.uiIsLoading,
    error: state.ui.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRegisterUser: (userData, history) =>
      dispatch(registerUser(userData, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
