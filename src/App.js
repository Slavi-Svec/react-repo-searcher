import GithubData from './GithubData'
import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const gitHubDataQuery = {
      query: `
    {
        viewer {
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
    fetch(GithubData.baseURL, {
      method: 'POST',
      headers: GithubData.headers,
      body: JSON.stringify(gitHubDataQuery)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data.viewer.repositories.nodes)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <div className="container">
      <h1 className="repositories-heading">Repositories list</h1>
    </div>
  )
}

export default App
