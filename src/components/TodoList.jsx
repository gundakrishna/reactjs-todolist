import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
const {todos, handleDeleteTodo} = props
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} index={todoIndex} key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList
