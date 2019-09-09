/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    gender
    email
    phone
    password
    tournaments {
      items {
        id
        title
        startDate
        endDate
        startTime
        endTime
        deadline
        venue
        description
        url
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        participants {
          nextToken
        }
        schedule {
          id
          description
        }
        updates {
          nextToken
        }
        results {
          nextToken
        }
      }
      nextToken
    }
    participants {
      items {
        id
        name
        gender
        user {
          id
          name
          gender
          email
          phone
          password
        }
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      nextToken
    }
    announcements {
      items {
        id
        title
        description
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
      }
      nextToken
    }
  }
}
`;
export const getParticipant = `query GetParticipant($id: ID!) {
  getParticipant(id: $id) {
    id
    name
    gender
    user {
      id
      name
      gender
      email
      phone
      password
      tournaments {
        items {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
        nextToken
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      announcements {
        items {
          id
          title
          description
          createdAt
        }
        nextToken
      }
    }
    tournament {
      id
      title
      startDate
      endDate
      startTime
      endTime
      deadline
      venue
      description
      url
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      schedule {
        id
        description
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      updates {
        items {
          id
          description
          createdAt
        }
        nextToken
      }
      results {
        items {
          id
          date
          matchNo
          winner
          score
          createdAt
        }
        nextToken
      }
    }
  }
}
`;
export const listParticipants = `query ListParticipants(
  $filter: ModelParticipantFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      gender
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      tournament {
        id
        title
        startDate
        endDate
        startTime
        endTime
        deadline
        venue
        description
        url
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        participants {
          nextToken
        }
        schedule {
          id
          description
        }
        updates {
          nextToken
        }
        results {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getTournament = `query GetTournament($id: ID!) {
  getTournament(id: $id) {
    id
    title
    startDate
    endDate
    startTime
    endTime
    deadline
    venue
    description
    url
    createdAt
    user {
      id
      name
      gender
      email
      phone
      password
      tournaments {
        items {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
        nextToken
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      announcements {
        items {
          id
          title
          description
          createdAt
        }
        nextToken
      }
    }
    participants {
      items {
        id
        name
        gender
        user {
          id
          name
          gender
          email
          phone
          password
        }
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      nextToken
    }
    schedule {
      id
      description
      tournament {
        id
        title
        startDate
        endDate
        startTime
        endTime
        deadline
        venue
        description
        url
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        participants {
          nextToken
        }
        schedule {
          id
          description
        }
        updates {
          nextToken
        }
        results {
          nextToken
        }
      }
    }
    updates {
      items {
        id
        description
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      nextToken
    }
    results {
      items {
        id
        date
        matchNo
        winner
        score
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      nextToken
    }
  }
}
`;
export const listTournaments = `query ListTournaments(
  $filter: ModelTournamentFilterInput
  $limit: Int
  $nextToken: String
) {
  listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      startDate
      endDate
      startTime
      endTime
      deadline
      venue
      description
      url
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      schedule {
        id
        description
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      updates {
        items {
          id
          description
          createdAt
        }
        nextToken
      }
      results {
        items {
          id
          date
          matchNo
          winner
          score
          createdAt
        }
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSchedule = `query GetSchedule($id: ID!) {
  getSchedule(id: $id) {
    id
    description
    tournament {
      id
      title
      startDate
      endDate
      startTime
      endTime
      deadline
      venue
      description
      url
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      schedule {
        id
        description
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      updates {
        items {
          id
          description
          createdAt
        }
        nextToken
      }
      results {
        items {
          id
          date
          matchNo
          winner
          score
          createdAt
        }
        nextToken
      }
    }
  }
}
`;
export const listSchedules = `query ListSchedules(
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      tournament {
        id
        title
        startDate
        endDate
        startTime
        endTime
        deadline
        venue
        description
        url
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        participants {
          nextToken
        }
        schedule {
          id
          description
        }
        updates {
          nextToken
        }
        results {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getUpdate = `query GetUpdate($id: ID!) {
  getUpdate(id: $id) {
    id
    description
    createdAt
    user {
      id
      name
      gender
      email
      phone
      password
      tournaments {
        items {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
        nextToken
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      announcements {
        items {
          id
          title
          description
          createdAt
        }
        nextToken
      }
    }
    tournament {
      id
      title
      startDate
      endDate
      startTime
      endTime
      deadline
      venue
      description
      url
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      schedule {
        id
        description
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      updates {
        items {
          id
          description
          createdAt
        }
        nextToken
      }
      results {
        items {
          id
          date
          matchNo
          winner
          score
          createdAt
        }
        nextToken
      }
    }
  }
}
`;
export const listUpdates = `query ListUpdates(
  $filter: ModelUpdateFilterInput
  $limit: Int
  $nextToken: String
) {
  listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      tournament {
        id
        title
        startDate
        endDate
        startTime
        endTime
        deadline
        venue
        description
        url
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        participants {
          nextToken
        }
        schedule {
          id
          description
        }
        updates {
          nextToken
        }
        results {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getResult = `query GetResult($id: ID!) {
  getResult(id: $id) {
    id
    date
    matchNo
    winner
    score
    createdAt
    user {
      id
      name
      gender
      email
      phone
      password
      tournaments {
        items {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
        nextToken
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      announcements {
        items {
          id
          title
          description
          createdAt
        }
        nextToken
      }
    }
    tournament {
      id
      title
      startDate
      endDate
      startTime
      endTime
      deadline
      venue
      description
      url
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      schedule {
        id
        description
        tournament {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
      }
      updates {
        items {
          id
          description
          createdAt
        }
        nextToken
      }
      results {
        items {
          id
          date
          matchNo
          winner
          score
          createdAt
        }
        nextToken
      }
    }
  }
}
`;
export const listResults = `query ListResults(
  $filter: ModelResultFilterInput
  $limit: Int
  $nextToken: String
) {
  listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      matchNo
      winner
      score
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
      tournament {
        id
        title
        startDate
        endDate
        startTime
        endTime
        deadline
        venue
        description
        url
        createdAt
        user {
          id
          name
          gender
          email
          phone
          password
        }
        participants {
          nextToken
        }
        schedule {
          id
          description
        }
        updates {
          nextToken
        }
        results {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
export const getAnnouncement = `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    id
    title
    description
    createdAt
    user {
      id
      name
      gender
      email
      phone
      password
      tournaments {
        items {
          id
          title
          startDate
          endDate
          startTime
          endTime
          deadline
          venue
          description
          url
          createdAt
        }
        nextToken
      }
      participants {
        items {
          id
          name
          gender
        }
        nextToken
      }
      announcements {
        items {
          id
          title
          description
          createdAt
        }
        nextToken
      }
    }
  }
}
`;
export const listAnnouncements = `query ListAnnouncements(
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      createdAt
      user {
        id
        name
        gender
        email
        phone
        password
        tournaments {
          nextToken
        }
        participants {
          nextToken
        }
        announcements {
          nextToken
        }
      }
    }
    nextToken
  }
}
`;
