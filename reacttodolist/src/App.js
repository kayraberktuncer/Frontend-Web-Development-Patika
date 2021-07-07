import React, { useState } from 'react'
import Header from './components/Header'
import Todo from './components/Todo'
import Footer from './components/Footer'

function App() {
  const initialTodos = [
    { text: 'Learn JavaScript', isCompleted: true },
    { text: 'Learn React', isCompleted: false },
    { text: 'Have a life!', isCompleted: false },
  ]

  const [todo, setTodo] = useState(initialTodos)

  const getTodo = (event) => {
    setTodo(event.target.value)
    event.preventDefault()
  }

  return (
    <div className="App">
      <section className="todoapp">
        <Header getTodo={getTodo} />
        <Todo todo={todo} />
        {console.log(todo)}
      </section>
      <Footer />
    </div>
  )
}

export default App
