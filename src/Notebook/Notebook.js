import React from 'react'

/** context */
import NotebookProvider from './NotebookProvider/NotebookProvider'
import Form from './Form/Form'
import Notes from './Notes/Notes'

export const Notebook = () =>  {
    return (
        <NotebookProvider>
            I am the notebook
            <Form />
            <Notes />
        </NotebookProvider>
    )
}

export default Notebook
