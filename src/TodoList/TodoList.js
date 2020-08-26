import React from 'react'

/** components */
import Form from './Form/Form'
import List from './List/List'

export const TodoList = () => {
    return (
        <div>
            <h4>Todo List with React Context</h4>
            <Form />
            <List />
        </div>
    )
}

export default TodoList