import React from 'react';
import NotebookContext from '../NotebookContext/NotebookContext';
import Note from './Note/Note'

export const Notes = () => {
    return (
        <NotebookContext.Consumer>
            {({ notes }) => {
                console.log('notes', notes)
                return (
                    <ul>
                        {Object.values(notes).map(note => {
                            return (
                                <Note {...note} />
                            )
                        })}
                    </ul>
                )
            }}
        </NotebookContext.Consumer>
    )
}

export default Notes;