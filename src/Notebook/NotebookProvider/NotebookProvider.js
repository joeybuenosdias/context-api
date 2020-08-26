import React, { useReducer } from 'react'
import NotebookContext from '../NotebookContext/NotebookContext'

const initialState = {
    noteText: '',
    notes: {},
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: {
                    ...state.notes,
                    [action.note.id]: action.note
                }
            }
        case 'SET_NOTE_TEXT':
            return {
                ...state,
                noteText: action.noteText
            }
        default:
            throw new Error()
    }
}

export const NotebookProvider =({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <NotebookContext.Provider value={{
            ...state,
            dispatch,
        }}>
            { children }
        </NotebookContext.Provider>
    )
}

export default NotebookProvider
