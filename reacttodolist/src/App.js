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
  
  const [todo, setTodo] = useState('')

  const getTodo = (event) => {
    setTodo(event.target.value)
    event.preventDefault()
  }

  return (
    <div className="App">
      <section className="todoapp">
        <Header getTodo={getTodo} />
        <Todo />
        {console.log(todo)}
        <Footer />
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </div>
  )
}

export default App
