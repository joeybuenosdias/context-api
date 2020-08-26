import React from 'react'
import NotebookContext from '../../NotebookContext/NotebookContext'

export const Note = ({ id, text, completed }) => {
    return (
        <NotebookContext.Consumer>
            {({ dispatch }) => {
                return (
                    <li>
                        {text} : {id}
                        <button onClick={() => dispatch({
                            type: 'UPDATE_NOTE',
                            id
                        })}>
                            {completed ? 'completed' : 'incomplete'}
                        </button>
                        <button
                            onClick={() => dispatch({
                                type: 'DELETE_NOTE',
                                id,
                            })}
                        >
                            delete
                        </button>
                    </li>
                )
            }}
        </NotebookContext.Consumer>

    )
}

export default Note