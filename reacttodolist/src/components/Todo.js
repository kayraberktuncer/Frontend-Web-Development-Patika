import React, { useState, useEffect } from 'react'
import TodoFooter from './TodoFooter'

export default function Todo({
  todo,
  setTodo,
  filter,
  setFilter,
  removeAllCompletedTodo,
  checkFilter,
}) {
  const [isEachTodoCompleted, setIsEachTodoCompleted] = useState(false)
  const [updateTodoIndex, setUpdateTodoIndex] = useState(-1)

  useEffect(() => {
    setIsEachTodoCompleted(todo.every((item) => item.isCompleted))
  }, [todo])

  const handleToggleComplete = (index) => {
    updateTodo({ isCompleted: !todo[index].isCompleted }, index)
  }

  const handleToggleAllComplete = () => {
    const newTodoList = todo.map((item) => {
      item.isCompleted = !isEachTodoCompleted
      return item
    })

    setTodo(newTodoList)
  }

  const handleUpdateTodoIndex = (index) => {
    setUpdateTodoIndex(index)
  }

  const handleOnBlur = (e, index) => {
    setUpdateTodoIndex(-1)

    if (e.target.value === '') return false

    updateTodo({ text: e.target.value }, index)
  }

  const removeTodo = (index) => {
    const filteredTodos = todo.filter((todo, i) => i !== index)
    setTodo(filteredTodos)
  }

  const updateTodo = (newTodo, index) => {
    let newTodoList = [...todo]
    let todoItem = newTodoList[index]
    newTodoList[index] = { ...todoItem, ...newTodo }
    setTodo(newTodoList)
  }

  const leftItems = (todo) => {
    todo = todo.filter((item) => item.isCompleted !== true)
    return todo.length
  }

  return (
    <>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={isEachTodoCompleted}
          onChange={handleToggleAllComplete}
        />
        <label
          htmlFor="toggle-all"
          onClick={handleToggleAllComplete}
          className="toggle-all"
        >
          Mark all as complete
        </label>

        <ul className="todo-list">
          {todo.map((item, index) => {
            return (
              checkFilter(filter, item) && (
                <li
                  className={item.isCompleted === true ? 'completed' : 'view'}
                  key={index}
                >
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => handleToggleComplete(index)}
                    />
                    {updateTodoIndex === index ? (
                      <input
                        defaultValue={todo.text}
                        className="mv-editor"
                        autoFocus={true}
                        onBlur={(event) => handleOnBlur(event, index)}
                      />
                    ) : (
                      <>
                        <label onClick={() => handleUpdateTodoIndex(index)}>
                          {item.text}
                        </label>
                        <button
                          className="destroy"
                          onClick={() => removeTodo(index)}
                        ></button>
                      </>
                    )}
                  </div>
                </li>
              )
            )
          })}
        </ul>
      </section>
      <TodoFooter
        todo={todo}
        leftItems={leftItems}
        filter={filter}
        setFilter={setFilter}
        removeAllCompletedTodo={removeAllCompletedTodo}
      />
    </>
  )
}
