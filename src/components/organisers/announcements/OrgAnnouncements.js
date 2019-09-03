import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Feed, Button, Icon } from 'semantic-ui-react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { listAnnouncements } from '../../../graphql/queries'
import { onCreateAnnouncement } from '../../../graphql/subscriptions'

class OrgAnnouncements extends Component {
  render() {

    const onNewAnnouncement = (prevQuery, newData) => {
      let updatedQuery = { ...prevQuery }
      const updatedAnnouncementList = [
        newData.onCreateAnnouncement,
        ...prevQuery.listAnnouncements.items
      ]
      updatedQuery.listAnnouncements.items = updatedAnnouncementList
      return updatedQuery
    }

    return (
      <Container>
        <Header as='h2'>
          <span role="img" aria-label="loud-hailer">📢</span> Announcements
        </Header>
        <Connect
          query={graphqlOperation(listAnnouncements)}
          subscription={graphqlOperation(onCreateAnnouncement)}
          onSubscriptionMsg={onNewAnnouncement}
        >
        {({ data, loading, errors}) => {
          if(errors.length > 0) return <p>Error</p>
          if(loading || !data.listAnnouncements) return <p>Loading..</p>

          return(
            <Feed>
            {data.listAnnouncements.items.map(announcement => {
              return (
                <Feed.Event key={announcement.id}>
                  <Feed.Content>
                    <Button as={Link} to={`/organisers/announcements/edit/${announcement.id}`} basic color='black' floated='right'>
                      <Icon name='pencil' /> Edit
                    </Button>
                    <Feed.Summary>
                      <a style={{ color: 'black', fontWeight: 'bold' }}>{announcement.title}</a>
                      <Feed.Date>{announcement.createdAt}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra text>
                      <div
                        style={{ marginTop: 20, marginBottom: 50 }}
                        dangerouslySetInnerHTML={{ __html: announcement.description }}
                      >
                      </div>
                    </Feed.Extra>
                  </Feed.Content>
                </Feed.Event>
              )
            })}
            </Feed>
          )

        }}
        </Connect>
      </Container>
    )
  }
}

export default OrgAnnouncements
