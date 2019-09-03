import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Menu, Header } from 'semantic-ui-react'

const OrgTournamentNav = ({ tournamentId }) => {
  return(
    <Grid.Column width={3} stackable>
      <Menu vertical>
        <Header icon="info circle" attached inverted color="grey" content="Tournament Details" />
        <Menu.Item as={Link} to={`/organisers/tournament/${tournamentId}/updates`}>Updates</Menu.Item>
        <Menu.Item as={Link} to={`/organisers/tournament/${tournamentId}/results`}>Results</Menu.Item>
        <Menu.Item as={Link} to={`/organisers/tournament/${tournamentId}/schedule`}>Schedule</Menu.Item>
        <Menu.Item as={Link} to={`/organisers/tournament/${tournamentId}/participants`}>Participants</Menu.Item>
        <Menu.Item as={Link} to={`/organisers/tournament/${tournamentId}/about`}>About</Menu.Item>
      </Menu>
    </Grid.Column>
  )
}

export default OrgTournamentNav
