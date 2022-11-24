import React from 'react'
import AddUser from './components/AddUser'
import './index.css'
import UsersList from './components/UsersList'
import { useState } from 'react'
import ReactCSV from './components/ReactCSV'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}]
    })
  } 

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <ReactCSV usersFile={usersList}/>
      <UsersList users={usersList}/>
    </div>
  )
}

export default App
