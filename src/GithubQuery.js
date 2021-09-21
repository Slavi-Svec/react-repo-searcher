const githubDataQuery = {
  query: `
      {
        viewer {
          name
          repositories(privacy: PUBLIC, last:20) {
            nodes {
              name
              description
              id
              url
            }
          }
        }
      }
          `
}

export default githubDataQuery
