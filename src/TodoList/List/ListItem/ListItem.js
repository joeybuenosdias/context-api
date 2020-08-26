import React from 'react'
import Context from '../../../Context/Context'

export const ListItem = ({ id, text }) => {

    return (
        <Context.Consumer>
            {({ handleToggleTodo, handleDeleteTodo }) => {
                return (
                    <li>
                        {text} : {id}
                        <button onClick={() => handleToggleTodo(id)}>incomplete</button>
                        <button onClick={() => handleDeleteTodo(id)}>delete</button>
                    </li>
                )
            }}
        </Context.Consumer>
    )
}

export default ListItem