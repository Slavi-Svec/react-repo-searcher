import GithubData from './GithubData'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [githubUserName, setGithubUserName] = useState('')

  useEffect(() => {
    const gitHubDataQuery = {
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
    fetch(GithubData.baseURL, {
      method: 'POST',
      headers: GithubData.headers,
      body: JSON.stringify(gitHubDataQuery)
    })
      .then(response => response.json())
      .then(data => {
        setGithubUserName(data.data.viewer.name)
        console.log(data.data.viewer.name)
      })
      .catch(error => {
        console.log(error)
      })
  })

  return (
    <div className="container">
      <h1 className="repositories-heading">Repositories list</h1>
          <p>This is {githubUserName.trim() + "'s"} Github repository</p>
    </div>
  )
}

export default App
