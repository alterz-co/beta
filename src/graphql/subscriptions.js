// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTournament = `subscription OnCreateTournament {
  onCreateTournament {
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
      announcements {
        nextToken
      }
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
export const onUpdateTournament = `subscription OnUpdateTournament {
  onUpdateTournament {
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
      announcements {
        nextToken
      }
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
export const onDeleteTournament = `subscription OnDeleteTournament {
  onDeleteTournament {
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
      announcements {
        nextToken
      }
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
export const onCreateSchedule = `subscription OnCreateSchedule {
  onCreateSchedule {
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
export const onUpdateSchedule = `subscription OnUpdateSchedule {
  onUpdateSchedule {
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
export const onDeleteSchedule = `subscription OnDeleteSchedule {
  onDeleteSchedule {
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
export const onCreateUpdate = `subscription OnCreateUpdate {
  onCreateUpdate {
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
export const onUpdateUpdate = `subscription OnUpdateUpdate {
  onUpdateUpdate {
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
export const onDeleteUpdate = `subscription OnDeleteUpdate {
  onDeleteUpdate {
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
export const onCreateResult = `subscription OnCreateResult {
  onCreateResult {
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
export const onUpdateResult = `subscription OnUpdateResult {
  onUpdateResult {
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
export const onDeleteResult = `subscription OnDeleteResult {
  onDeleteResult {
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
export const onCreateAnnouncement = `subscription OnCreateAnnouncement {
  onCreateAnnouncement {
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
      announcements {
        nextToken
      }
    }
  }
}
`;
export const onUpdateAnnouncement = `subscription OnUpdateAnnouncement {
  onUpdateAnnouncement {
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
      announcements {
        nextToken
      }
    }
  }
}
`;
export const onDeleteAnnouncement = `subscription OnDeleteAnnouncement {
  onDeleteAnnouncement {
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
      announcements {
        nextToken
      }
    }
  }
}
`;
