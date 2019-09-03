import React, { Component } from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { listAnnouncements } from '../graphql/queries'
import { onCreateAnnouncement } from '../graphql/subscriptions'
import Nav from './Nav'

class Announcements extends Component {
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
      <Connect
        query={graphqlOperation(listAnnouncements)}
        subscription={graphqlOperation(onCreateAnnouncement)}
        onSubscriptionMsg={onNewAnnouncement}
      >
      {({ data, loading, errors}) => {
        if(errors.length > 0) return <p>Error</p>
        if(loading || !data.listAnnouncements) return <p>Loading..</p>

        return(
          <div>
            <Nav/>
            <div className="container">
              <p style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>
                <span role="img" aria-label="loud-hailer" style={{ paddingLeft: 10, paddingRight: 20 }}>📢</span>
                Announcements
              </p>
              <ul className="collection">
              {data.listAnnouncements.items.map(announcement => {
                return (
                  <li key={announcement.id} className="collection-item">
                    <p style={{ fontWeight: 'bold', marginBottom: -2 }}>{announcement.title}</p>
                    <p className="grey-text">{announcement.createdAt}</p>
                    <div
                      style={{ marginTop: 10, marginBottom: 10 }}
                      dangerouslySetInnerHTML={{ __html: announcement.description }}
                    >
                    </div>
                  </li>
                )
              })}
              </ul>
            </div>
          </div>
        )

      }}
      </Connect>
    )
  }
}

export default Announcements
