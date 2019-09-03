import React, { Component } from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../logos/landing.svg'

class Landing extends Component {
  render() {
    return (
      <section className="section container">
        <div className="row">
          <img alt="logo" className="col s12 m12 l12" src={logo} style={{ height: 200 }}/>
          <div className="col s12 l12">
            <form style={{ padding: 50 }}>
              <div className="input-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  name="password"
                />
                <label>Password</label>
              </div>
              <p>
                Forget password?{' '}
                <a href="" className="grey-text">Reset Password</a>
              </p>
              <input
                type="submit"
                value="Sign In"
                className="btn-large col s12 m12 l12 black white-text"
                style={{ marginTop: 20, marginBottom: 20 }}
              />
              <p className="center-align">
                No account?{' '}
                <a href={ROUTES.REGISTER} className="grey-text">Create account</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing
