import React, { useState } from 'react';
import Context from './Context';

export const ContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([])

    const handleAddTodo = todo => {
        setTodoList([...todoList, todo])
    }

    const handleToggleTodo = id => {
        const updatedTodos = todoList.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    completed: !item.completed,
                }
            } else {
                return item
            }
        })

        setTodoList(updatedTodos)
    }

    const handleDeleteTodo = id => {
        const updatedTodos = todoList.filter((item) => item.id !== id)
        setTodoList(updatedTodos)
    }

    return (
        <Context.Provider value={{
            todoList,
            handleAddTodo,
            handleToggleTodo,
            handleDeleteTodo,
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;