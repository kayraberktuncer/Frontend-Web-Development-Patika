import React from 'react'

export default function Header({ getTodo }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={getTodo}
        />
      </form>
    </header>
  )
}
