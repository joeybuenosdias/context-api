import React from 'react';
import { v4 } from 'uuid';
import NotebookContext from '../NotebookContext/NotebookContext'

export const Form = () => {

    const handleAddNote = (text, dispatch) => {
        const id = v4()
        dispatch({
            type: 'ADD_NOTE',
            note: {
                id,
                text,
            }
        })

        dispatch({
            type: 'SET_NOTE_TEXT',
            noteText: ''
        })

    }
    return (
        <NotebookContext.Consumer>
            {({ dispatch, noteText }) => {
                console.log('noteText', noteText)
                return (
                    <form onSubmit={e => e.preventDefault()}>
                        <input
                            onChange={e => dispatch({ type: 'SET_NOTE_TEXT', noteText: e.target.value })}
                            value={noteText}
                        />
                        <button onClick={() => handleAddNote(noteText, dispatch)}>Add Note!</button>
                    </form>
                )
            }}
        </NotebookContext.Consumer>
    )
}

export default Form