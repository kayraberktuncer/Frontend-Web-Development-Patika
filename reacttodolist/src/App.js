import React, { useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import Footer from './components/Footer'

function App() {
  const initialTodos = [
    { text: 'Learn JavaScript', isCompleted: false },
    { text: 'Learn React', isCompleted: false },
    { text: 'Have a life!', isCompleted: false },
  ]

  const [todo, setTodo] = useState(initialTodos)
  const [filter, setFilter] = useState('all')

  const checkFilter = (filter, item) => {
    switch (filter) {
      case 'all':
        return true
      case 'active':
        return !item.isCompleted
      case 'completed':
        return item.isCompleted
      default:
        return false
    }
  }

  const removeAllCompletedTodo = () => {
    const filteredTodos = todo.filter((item) => !item.isCompleted)
    setTodo(filteredTodos)
  }

  return (
    <div className="App">
      <section className="todoapp">
        <Header todo={todo} setTodo={setTodo} />
        <Todo
          todo={todo}
          setTodo={setTodo}
          filter={filter}
          setFilter={setFilter}
          removeAllCompletedTodo={removeAllCompletedTodo}
          checkFilter={checkFilter}
        />
      </section>
      <Footer />
    </div>
  )
}

export default App
