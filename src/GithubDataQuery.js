const githubDataQuery = {
  query: `
  {
      viewer {
          name
        repositories(privacy: PUBLIC, last: 10) {
          totalCount
          nodes {
            name
          }
        }
      }
  }
      `
}

export default githubDataQuery
