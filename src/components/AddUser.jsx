import React from 'react'
import Card from './Card'
import Button from './Button'
import { useState } from 'react'



function AddUser({ onAddUser }) {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge ] = useState('')

  const addUserHandle = (e) =>{
    e.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
      return;
    }
    if (+enteredAge < 1){
      return;
    }
    onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (e) =>{
    setEnteredUsername(e.target.value)
  }

  const ageChangeHandler = (e) =>{
    setEnteredAge(e.target.value)
  }

  return (
    <Card>
      <form onSubmit={addUserHandle}>
        <label htmlFor="username">Username</label>
        <input id='username' type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser
