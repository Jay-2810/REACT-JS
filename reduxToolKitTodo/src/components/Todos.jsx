import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const [editableId, setEditableId] = useState(null) // track which todo is being edited
  const [todoMsg, setTodoMsg] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const editTodo = (todo) => {
    dispatch(updateTodo({ id: todo.id, text: todoMsg }))
    setEditableId(null) // exit edit mode
  }

  return (
    <>
      <div className="text-center mt-7">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 mx-20 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">
              {editableId === todo.id ? (
                <input
                  value={todoMsg}
                  onChange={(e) => setTodoMsg(e.target.value)}
                  className="text-black px-2 py-1 rounded"
                />
              ) : (
                todo.text
              )}
            </div>

            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                if (todo.completed) return

                if (editableId === todo.id) {
                  editTodo(todo)
                } else {
                  setEditableId(todo.id)
                  setTodoMsg(todo.text)
                }
              }}
              disabled={todo.completed}
            >
              {editableId === todo.id ? '📁' : '✏️'}
            </button>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos