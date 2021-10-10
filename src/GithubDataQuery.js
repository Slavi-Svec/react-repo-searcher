const githubDataQuery = {
  query: `
    {
      viewer {
        name
          repositories(privacy: PUBLIC, last: 10) {
                  nodes {
                    name
                    url
                    description
                  }
           }
      }
    }
  `
}

export default githubDataQuery
