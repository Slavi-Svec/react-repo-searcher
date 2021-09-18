import React, { useEffect, useState, useCallback } from 'react'
import GithubData from './GithubData.jsx'
import githubDataQuery from './GithubQuery'
import './App.css'

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
        setGithubReposList(data.data.viewer.repositories.nodes)
      })
      .catch(error => {
        console.log(error)
      })
  }, [githubReposList])

  useEffect(() => {
    fetchData()
  }, []) //   This is an example of the response data

  const nodes = [
    {
      name: 'crypto-tracker'
    },
    {
      name: 'interval-timer'
    },
    {
      name: 'Slavi-Svec'
    },
    {
      name: 'react-repo-searcher'
    }
  ]

  return (
    <div className="container">
       <h1 className="repositories-heading">Repositories list</h1>
         <p>This is {githubUserName.trim() + "'s"} Github repository</p>
      <ul className="github-repo-list">
        <li className="github-repo-list-items">
          {nodes.map(user => (
            <div className="github-repo-titles">{user.name}</div>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default App
