import React, { Component } from 'react';

import * as ROUTES from '../constants/routes';

class Nav extends Component {

  render(){
    return(
      <div>
        <nav className="nav-wraper white">
          <div className="container">
            <a href={ROUTES.HOME} className="brand-logo black-text">Alterz</a>
            <a href="" className="sidenav-trigger" data-target="mobile-links">
              <i className="material-icons black-text">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href={ROUTES.HOME} className="grey-text">Tournaments</a></li>
              <li><a href={ROUTES.LUCKY_DRAW} className="grey-text">Lucky Draw</a></li>
              <li><a href={ROUTES.PROFILE} className="grey-text">Profile</a></li>
              <li><a href={ROUTES.ANNOUNCEMENTS} className="grey-text">Announcements</a></li>
            </ul>
            <ul className="right hide-on-med-and-up">
              <li>
                <a href={ROUTES.ANNOUNCEMENTS}>
                  <i className="material-icons black-text">notifications</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-links" style={{ paddingTop: 50 }}>
          <li>
            <a href={ROUTES.HOME} className="grey-text">
              <i className="material-icons black-text">home</i> Tournaments
            </a>
          </li>
          <li>
            <a href={ROUTES.LUCKY_DRAW} className="grey-text">
              <i className="material-icons black-text">card_giftcard</i> Lucky Draw
            </a>
          </li>
          <li>
            <a href={ROUTES.PROFILE} className="grey-text">
              <i className="material-icons black-text">person</i> Profile
            </a>
          </li>
          <li>
            <a href={ROUTES.ANNOUNCEMENTS} className="grey-text">
              <i className="material-icons black-text">notifications</i> Announcements
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
