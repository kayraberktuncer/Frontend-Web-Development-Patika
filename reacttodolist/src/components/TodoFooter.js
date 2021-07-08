import React from 'react'

export default function TodoFooter({
  todo,
  leftItems,
  filter,
  setFilter,
  removeAllCompletedTodo,
}) {
  const handleOnClickFilter = (filter) => {
    setFilter(filter)
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftItems(todo)}</strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <button
            className={filter === 'all' ? 'selected' : ''}
            onClick={() => handleOnClickFilter('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === 'active' ? 'selected' : ''}
            onClick={() => handleOnClickFilter('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === 'completed' ? 'selected' : ''}
            onClick={() => handleOnClickFilter('completed')}
          >
            Completed
          </button>
        </li>
      </ul>
      <button className="clear-completed" onClick={removeAllCompletedTodo}>
        Clear completed
      </button>
    </footer>
  )
}
