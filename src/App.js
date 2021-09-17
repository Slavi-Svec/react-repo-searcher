import React, { useEffect, useState, useCallback } from 'react'
import GithubData from './GithubData'
import githubDataQuery from './GithubQuery'

const App = () => {
  const [githubUserName, setGithubUserName] = useState('')
  const [githubReposList, setGithubReposList] = useState('')

  const fetchData = useCallback(() => {
    fetch(GithubData.baseURL, {
      method: 'POST',
      headers: GithubData.headers,
      body: JSON.stringify(githubDataQuery)
    })
      .then(response => response.json())
      .then(data => {
        setGithubUserName(data.data.viewer.name)
        setGithubReposList(data.data.viewer.repositories.nodes[0].name)
        console.log(data.data.viewer.repositories.nodes[0].name)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="container">
      <h1 className="repositories-heading">Repositories list</h1>
          <p>This is {githubUserName.trim() + "'s"} Github repository</p>
      <div>here is my github repo -> {githubReposList}</div>
    </div>
  )
}

export default App
