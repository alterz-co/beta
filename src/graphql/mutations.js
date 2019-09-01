// eslint-disable
// this is an auto generated file. This will be overwritten

export const registerUser = `mutation RegisterUser($input: CreateUserInput!) {
  registerUser(input: $input) {
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
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
`;
export const createParticipant = `mutation CreateParticipant($input: CreateParticipantInput!) {
  createParticipant(input: $input) {
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
}
`;
export const updateParticipant = `mutation UpdateParticipant($input: UpdateParticipantInput!) {
  updateParticipant(input: $input) {
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
}
`;
export const deleteParticipant = `mutation DeleteParticipant($input: DeleteParticipantInput!) {
  deleteParticipant(input: $input) {
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
}
`;
export const createTournament = `mutation CreateTournament($input: CreateTournamentInput!) {
  createTournament(input: $input) {
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
`;
export const updateTournament = `mutation UpdateTournament($input: UpdateTournamentInput!) {
  updateTournament(input: $input) {
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
`;
export const deleteTournament = `mutation DeleteTournament($input: DeleteTournamentInput!) {
  deleteTournament(input: $input) {
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
`;
export const createSchedule = `mutation CreateSchedule($input: CreateScheduleInput!) {
  createSchedule(input: $input) {
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
}
`;
export const updateSchedule = `mutation UpdateSchedule($input: UpdateScheduleInput!) {
  updateSchedule(input: $input) {
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
}
`;
export const deleteSchedule = `mutation DeleteSchedule($input: DeleteScheduleInput!) {
  deleteSchedule(input: $input) {
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
}
`;
export const createUpdate = `mutation CreateUpdate($input: CreateUpdateInput!) {
  createUpdate(input: $input) {
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
}
`;
export const updateUpdate = `mutation UpdateUpdate($input: UpdateUpdateInput!) {
  updateUpdate(input: $input) {
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
}
`;
export const deleteUpdate = `mutation DeleteUpdate($input: DeleteUpdateInput!) {
  deleteUpdate(input: $input) {
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
}
`;
export const createResult = `mutation CreateResult($input: CreateResultInput!) {
  createResult(input: $input) {
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
}
`;
export const updateResult = `mutation UpdateResult($input: UpdateResultInput!) {
  updateResult(input: $input) {
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
}
`;
export const deleteResult = `mutation DeleteResult($input: DeleteResultInput!) {
  deleteResult(input: $input) {
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
}
`;
export const createAnnouncement = `mutation CreateAnnouncement($input: CreateAnnouncementInput!) {
  createAnnouncement(input: $input) {
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
}
`;
export const updateAnnouncement = `mutation UpdateAnnouncement($input: UpdateAnnouncementInput!) {
  updateAnnouncement(input: $input) {
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
}
`;
export const deleteAnnouncement = `mutation DeleteAnnouncement($input: DeleteAnnouncementInput!) {
  deleteAnnouncement(input: $input) {
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
}
`;
