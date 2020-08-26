import React, { useState } from 'react'
import Context from '../../Context/Context'

export const Form = () => {
    const [text, setText] = useState('')
    const [id, incrementId] = useState(0)

    const addTodo = (todoText, todoId, addTodoCb) => {
        addTodoCb({
            id: todoId,
            text: todoText,
            completed: false,
        })
        incrementId(id + 1)
        setText('')
    }


    return (
        <Context.Consumer>
            {({ handleAddTodo }) => {
                return (
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <button onClick={() => addTodo(text, id, handleAddTodo)}>Add!</button>
                    </form>
                )
            }}
        </Context.Consumer>
    )
}

export default Form