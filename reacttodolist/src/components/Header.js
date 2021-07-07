import React, { useEffect, useState } from 'react'

const initialFormItems = { text: '', isCompleted: false }

export default function Header({ todo, setTodo }) {
  const [newTodo, setNewTodo] = useState(initialFormItems)

  useEffect(() => {
    setNewTodo(initialFormItems)
  }, [todo])

  const handleOnChangeInput = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    if (newTodo.text === '') {
      return false
    }

    setTodo([...todo, newTodo])
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          name="text"
          value={newTodo.text}
          onChange={handleOnChangeInput}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  )
}
