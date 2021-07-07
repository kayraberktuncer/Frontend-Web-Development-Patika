import React from 'react'

export default function Todo({ todo }) {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label className="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todo.map((item) => {
            return (
              <>
                <li
                  className={item.isCompleted === true ? 'completed' : 'view'}
                >
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{item.text}</label>
                    <button className="destroy"></button>
                  </div>
                </li>
              </>
            )
          })}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <button className="selected">All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </>
  )
}
