import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';
import logo from '../../logos/nav.svg';

import * as ROUTES from '../../constants/routes';

class OrgNav extends Component {
  render(){
    return(
      <Menu secondary style={{ paddingTop: 20, paddingBottom: 50, paddingLeft: 50, paddingRight: 50 }} stackable>
        <Menu.Item>
          <Image as={Link} to={ROUTES.ORGANISERS} src={logo} size='small'/>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item as={Link} to={ROUTES.ORGANISERS} name='Tournaments'/>
          <Menu.Item>
            <Button as={Link} to={ROUTES.ORGANISERS_TOURNAMENT_ADD} content='➕ New Tournament' basic color='black'/>
          </Menu.Item>
          <Menu.Item>
            <Button as={Link} to={ROUTES.ORGANISERS_ANNOUNCEMENT_ADD} color='pink'>
              <Icon name='plus' /> New Announcement
            </Button>
          </Menu.Item>
          <Menu.Item>
            <Menu.Item as={Link} to={ROUTES.ORGANISERS_PROFILE} name='Profile'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}


export default OrgNav;
