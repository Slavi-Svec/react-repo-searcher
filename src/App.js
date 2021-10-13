import React, { useEffect, useState, useCallback } from 'react'
import githubData from './GithubData'
import githubDataQuery from './GithubDataQuery'
import './App.css'

const App = () => {
  const [githubUserName, setGithubUserName] = useState('')
  const [githubReposList, setGithubReposList] = useState('')
  const [avatarImage, setAvatarImage] = useState('')

  const fetchData = useCallback(() => {
    fetch(githubData.baseURL, {
      method: 'POST',
      headers: githubData.headers,
      body: JSON.stringify(githubDataQuery)
    })
      .then(response => response.json())
      .then(data => {
        setGithubUserName(data.data.viewer.name)
        setGithubReposList(data.data.viewer.repositories.nodes)
        setAvatarImage(data.data.viewer.avatarUrl)
        console.log(data.data.viewer.avatarUrl)
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
      <h1 className="repositories-heading">Repositories list</h1>
      {avatarImage && (
        <img className="github-repo-avatar" src={avatarImage} alt="image"></img>
      )}
      {githubUserName && (
        <p>This is {`${githubUserName.trim()}'s`} Github repository</p>
      )}
      <ul className="github-repo-list">
        <div className="github-repo-list-items">
          {githubReposList &&
            githubReposList.map(user => (
              <div className="github-repo-titles">
                <a
                  className="github-repo-url"
                  href={user.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.name}
                </a>
                <li className="github-repo-description">{user.description}</li>
              </div>
            ))}
        </div>
      </ul>
    </div>
  )
}

export default App
