import React, { Component } from 'react';
import * as ROUTES from '../constants/routes';
import logo from '../logos/landing.svg';
import { API, graphqlOperation } from 'aws-amplify';
import { registerUser } from '../graphql/mutations';

class Register extends Component {
  state = {
    name: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    error: ''
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  isFormValid = () => {
    if(this.isFormEmpty(this.state)){
      this.setState({ error: 'Fill in all fields with asterisk' });
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({ name, gender, email, phone, password }) => {
    return name === '' || gender === '' || email === '' || phone === '' || password === '';
  }

  onSubmit = async event => {
    event.preventDefault();
    if(this.isFormValid()){
      this.setState({ error: '' });
      const newUser = {
        name: this.state.name,
        gender: this.state.gender,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password
      }
      // console.log(newUser)
      const result = await API.graphql(graphqlOperation(registerUser, { input: newUser }))
      console.log('Register', result.data.registerUser)
      this.setState({
        name: '',
        gender: '',
        email: '',
        phone: '',
        password: ''
      });
    }
  }

  render() {
    return (
      <section className="section container">
        <div className="row">
          <img alt="logo" className="col s12 m12 l12" src={logo} style={{ height: 200 }}/>
          <div className="col s12 l12">
            {this.state.error && <p className="red-text center-align">{this.state.error}</p>}
            <form style={{ paddingLeft: 50, paddingRight: 50 }} onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
                <label>Name *</label>
              </div>
              <div className="input-field">
                <p>
                  <label>
                    <input name="gender" type="checkbox" value="Male" onChange={this.onChange}/>
                    <span>Male</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="gender" type="checkbox" value="Female" onChange={this.onChange}/>
                    <span>Female</span>
                  </label>
                </p>
              </div>
              <div className="input-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
                <label>Email *</label>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
                <label>Phone number *</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
                <label>Password *</label>
              </div>
              <input
                type="submit"
                value="Create Account"
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              <p className="center-align">
                Have an account?{' '}
                <a href={ROUTES.LANDING} className="grey-text">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
